import React, { useContext } from 'react';
import EventLayout from '../components/EventLayout';
import eventsStyles from '../events.styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../../assets/images/svgs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setStep } from '../events.slice';
import { ScrollView } from 'react-native-gesture-handler';
import Ticket from '../components/Ticket';
import {
  EventContext,
  SetEventContext,
} from '../../../lib/context/EventEditContext';
import { IsEditable } from '../helper';
import { useNavigation } from '@react-navigation/native';
import OutlinedButtonWithIcon from '../../../components/Button/OutlinedButtonWithIcon';

const Step3 = () => {
  const dispatch = useAppDispatch();
  const setEventContext = useContext(SetEventContext);
  const tickets = useAppSelector(state => state.event.tickets);
  const { id: EventId } = useContext(EventContext);
  const navigation: any = useNavigation();
  const onNextBtnPress = () => {
    if (IsEditable(EventId)) {
      setEventContext({ id: 0 });
      navigation.reset({
        index: 0,
        routes: [{ name: 'GroupsMain' }],
      });
    } else {
      dispatch(setStep(6));
    }
  };

  return (
    <EventLayout btnTitle={'Next'} onBtnPress={onNextBtnPress}>
      <TouchableOpacity
        style={eventsStyles.ticketBtnContainer}
        onPress={() => {
          dispatch(setStep(4));
        }}>
        <Icons.AddTicket />
        <Text style={eventsStyles.imagePickerText}>Add Ticket</Text>
      </TouchableOpacity>
      <ScrollView style={eventsStyles.ticketContainerScroll}>
        {tickets?.map((ticket, index) => (
          <Ticket key={index} ticket={ticket} />
        ))}
      </ScrollView>
      {/* <View>
        <OutlinedButtonWithIcon
          title="Skip"
          onPress={() => {}}
          customStyle={eventsStyles.fullWidthPurple}
        />
      </View> */}
    </EventLayout>
  );
};

export default Step3;
