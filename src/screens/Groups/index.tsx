import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './build.styles';
import CreateGroupButton from './components/AddGroup';
import GroupsList from './components/GroupsList';
import EventList from './components/EventList';
import Heading from '../../components/Heading';
import { useGroupQuery } from '../../services/modules/group.api';
import { useGetEventByIdQuery } from '../../services/modules/event.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icons } from '../../assets/images/svgs';

const BuildAndManage = ({ navigation }: any) => {
  const { data: groups, isLoading } = useGroupQuery({});
  const onPressGroup = (id: any) => {
    navigation.navigate('Groups', { screen: 'GroupDetail', params: { id } });
  };
  const [selectedEventId, setSelectedEventID] = useState('');

  const { data: eventData, isSuccess } = useGetEventByIdQuery(selectedEventId, {
    skip: selectedEventId === '',
  });

  useEffectAfterSuccess(() => {
    navigation.navigate('EventDetail', {
      id: eventData?.id,
    });
  }, isSuccess);

  const onGetEvent = (id: any) => {
    setSelectedEventID(id);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.customHeader}>
          <Heading text={'Build & Manage'} />
          <TouchableOpacity>
            <Icons.Scan />
          </TouchableOpacity>
        </View>
        <View>
          <GroupsList
            groups={groups}
            navigation={navigation}
            loading={isLoading}
            onPressGroup={onPressGroup}
          />
          <EventList onPressEvent={onGetEvent} btnIsDisable={true} />
        </View>
        {!isLoading && (
          <View style={styles.addButtonsContainer}>
            {groups && groups?.length === 0 && (
              <CreateGroupButton
                onPress={() => {
                  navigation.navigate('CreateGroup', {
                    groupid: null,
                    edit: false,
                  });
                }}
              />
            )}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default BuildAndManage;
