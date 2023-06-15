import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { Icons } from '../../../assets/images/svgs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { resetTicketPayload, setStep } from '../events.slice';
import {
  EventContext,
  SetEventContext,
} from '../../../lib/context/EventEditContext';
import { IsEditable } from '../helper';
import { useNavigation } from '@react-navigation/native';

export const LayoutHeader = ({}: any) => {
  const step = useAppSelector(state => state.event.step);
  const ticketPayload = useAppSelector(state => state.event.ticketPayload);

  const { id: EventId } = useContext(EventContext);
  const dispatch = useAppDispatch();
  const navigation: any = useNavigation();
  const setEventContext = useContext(SetEventContext);
  const onPressBack = () => {
    if (step === 3) {
      if (IsEditable(EventId)) {
        setEventContext({ id: 0 });
        navigation.reset({
          index: 0,
          routes: [{ name: 'GroupsMain' }],
        });
      } else {
        dispatch(setStep(2));
      }
    } else if (step === 2) {
      dispatch(setStep(1));
    } else if (step === 1) {
      if (IsEditable(EventId)) {
        setEventContext({ id: 0 });
        navigation.reset({
          index: 0,
          routes: [{ name: 'GroupsMain' }],
        });
      } else {
        dispatch(setStep(0));
      }
    } else if (step === 4) {
      dispatch(setStep(3));
    } else if (step === 5) {
      if (ticketPayload?.id > 0) {
        dispatch(resetTicketPayload());
      } else {
        dispatch(setStep(4));
      }
    }
  };

  const getHeaderText = () => {
    switch (step) {
      case 1:
        // return 'Upload Image';
        return (
          <View style={styles.modifiedHeader}>
            <Text style={[styles.headerTitle, { paddingHorizontal: 90 }]}>
              Upload Image
            </Text>
            <TouchableOpacity>
              <Icons.HelpQuestion />
            </TouchableOpacity>
          </View>
        );

      case 2:
        return IsEditable(EventId) ? 'Edit Content' : 'Add Details';
      case 3:
        return IsEditable(EventId) ? 'Edit Ticket' : 'Add Ticket';
      case 4:
        return 'Ticketing';
      case 5:
        return ticketPayload?.id > 0 ? 'Edit Ticket' : 'Add Ticket';
    }
  };

  return (
    <View style={styles.header}>
      <SafeAreaView style={styles.flexContainer}>
        <TouchableOpacity onPress={onPressBack}>
          <Icons.LeftArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{getHeaderText()}</Text>
        <View />
      </SafeAreaView>
    </View>
  );
};
