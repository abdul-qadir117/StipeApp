import React from 'react';
import { PeviewEvent } from './components/PreviewEvent';
import { useGetEventByIdQuery } from '../../services/modules/event.api';
import { ActivityIndicator, View } from 'react-native';
import eventsStyles from './events.styles';
import styles from './components/styles';
import OutlinedButtonWithIcon from '../../components/Button/OutlinedButtonWithIcon';
import { setEvent, setTickets } from './events.slice';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigation } from '@react-navigation/native';

const Event = ({ route }: any) => {
  const { id } = route.params;
  const dispatch = useAppDispatch();
  const navigation: any = useNavigation();
  const { data: event, isLoading } = useGetEventByIdQuery(id, {
    skip: id === '',
  });

  if (isLoading) {
    return (
      <View style={eventsStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  const eventData = {
    image: {
      uri: `https://tbcdev.s3.eu-west-2.amazonaws.com/${event?.event_image}`,
    },
    name: event?.event_name,
    description: event?.event_description,
    categories: event?.categories,
    date: event?.event_at,
    time: event?.event_at,
    address: event?.event_location,
    tickets: event?.tickets,
    group: {
      id: event?.group?.id,
      name: event?.group?.name,
      description: event?.group?.description,
      logo: {
        uri: `https://tbcdev.s3.eu-west-2.amazonaws.com/${event?.group?.logo}`,
      },
    },
  };

  const onEditDetails = () => {
    const payload = {
      details: {
        name: event?.event_name,
        description: event?.event_description,
        date: event?.event_at,
        time: event?.event_at,
        categories: event?.categories?.map(
          ({ category }: { category: { id: string } }) => category?.id,
        ),
        address: event?.event_location,
      },
      group: event?.group_id,
      image: {
        uri: `https://tbcdev.s3.eu-west-2.amazonaws.com/${event?.group?.logo}`,
      },
    };

    dispatch(setEvent(payload));
    navigation.navigate('CreateEvent', {
      id: id,
    });
  };

  const onEditTickets = () => {
    const payload = event?.tickets ?? [];
    dispatch(setTickets(payload));
    navigation.navigate('CreateEvent', {
      id: id,
    });
  };

  return (
    <View style={eventsStyles.container}>
      <PeviewEvent event={eventData} isPreview={true} />
      <View style={[styles.btnContainer, eventsStyles.customMargin]}>
        <OutlinedButtonWithIcon
          title={'Edit Details'}
          onPress={onEditDetails}
          customStyle={styles.halfBtn}
        />
        <OutlinedButtonWithIcon
          title={'Edit Tickets'}
          onPress={onEditTickets}
          customStyle={styles.halfBtn}
        />
      </View>
    </View>
  );
};

export default Event;
