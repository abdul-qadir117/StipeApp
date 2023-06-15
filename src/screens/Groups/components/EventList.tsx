import React, { memo, useRef } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Image,
} from 'react-native';
import styles from '../build.styles';
import { Icons } from '../../../assets/images/svgs';
import { useGetEventsQuery } from '../../../services/modules/event.api';
import ModuleLabel from '../../../components/ModuleLabel';
import CreateEventButton from './AddEvent';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import metrics, { Adjust } from '../../../utils/mertrics';
import colors from '../../../utils/colors';
import { useAppDispatch } from '../../../hooks/redux';
import { resetState } from '../../Events/events.slice';

const EventList = ({ onPressEvent, btnIsDisable }: any) => {
  const {
    data: events,
    isLoading,
    isSuccess,
    refetch,
    isFetching,
  } = useGetEventsQuery('');
  const dispatch = useAppDispatch();
  const navigation: any = useNavigation();
  const ref = useRef(null);
  const Event = ({
    event,
  }: {
    event: {
      event_name: string;
      event_at: string;
      event_image: string;
      id: string;
    };
  }) => {
    const { event_name, event_at, event_image } = event;
    const date = `${moment(new Date(event_at)).format(
      'ddd, MMM YYYY',
    )} . ${moment(new Date(event_at)).format('HH:mm')}`;

    return (
      <TouchableOpacity
        onPress={() => onPressEvent(event?.id)}
        style={styles.customEventItem}>
        <View style={styles.eventItemContainer}>
          {event_image === null ? (
            <Icons.EventsItem />
          ) : (
            <Image
              source={{
                uri: `https://tbcdev.s3.eu-west-2.amazonaws.com/${event_image}`,
              }}
              style={styles.eventImg}
            />
          )}
          <View style={styles.eventMainContainer}>
            <View style={styles.eventCardContainer}>
              <View style={styles.roleTitleContainer}>
                <Text style={styles.roletitle}>{event_name}</Text>
                <Text style={styles.rolesubtitle}>{date}</Text>
              </View>
              <TouchableOpacity>
                <Icons.Export />
              </TouchableOpacity>
            </View>
            <View style={styles.memberContainer}>
              <Icons.GroupMember />
              <Text style={styles.goingText}>350 going</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.grouplistTitleContainer}>
        {isSuccess && events?.data?.length > 0 && (
          <>
            <ModuleLabel text="Events" />
            <View ref={ref} style={styles.eventListHeaderLeftRow}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(resetState());
                  navigation.navigate('CreateEvent');
                }}
                style={styles.eventListHeaderLeftRow}>
                <Icons.EventAddIcon />
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Text style={styles.seeAllText}>| See all</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {isLoading && <ActivityIndicator color={colors.primary} />}
      {isSuccess && !isLoading && (
        <FlatList
          style={{ height: Adjust(metrics.screenHeight - 450) }}
          data={events?.data ?? []}
          renderItem={({ item }) => <Event event={item} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <CreateEventButton disabled={btnIsDisable} />
          )}
          onRefresh={() => refetch()}
          refreshing={isFetching}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() => refetch()}
              tintColor={colors.primary}
            />
          }
        />
      )}
    </View>
  );
};

export default memo(EventList);
