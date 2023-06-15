import React, { useState } from 'react';
import Heading from '../../../components/Heading';
import GroupsSelectionList from '../components/GroupSelectionOption';
import ModuleLabel from '../../../components/ModuleLabel';
import EventLayout from '../components/EventLayout';
import styles from '../events.styles';
import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setStep } from '../events.slice';
const Step0 = () => {
  const dispatch = useAppDispatch();
  const group = useAppSelector(state => state.event.group);
  return (
    <EventLayout
      btnTitle={'Next'}
      onBtnPress={function (): void {
        if (group !== '') {
          dispatch(setStep(1));
        }
      }}
      infoBtnReq
      tipTextReq>
      <Heading text="Create Event" />
      <ModuleLabel text="Choose group" />

      <GroupsSelectionList />
      <Text style={styles.instruction}>
        Don’t see a group? Currently, events can only be created for groups you
        manage. If there’s a mistake, please let us know by reporting a bug.
      </Text>
    </EventLayout>
  );
};

export default Step0;
