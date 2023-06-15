import React, { useState } from 'react';
import { View, Modal, Text, Image } from 'react-native';
import styles from './styles';
import { Icons } from '../../../assets/images/svgs';
import moment from 'moment';
import { Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import OutlinedButtonWithIcon from '../../../components/Button/OutlinedButtonWithIcon';
import { useAppDispatch } from '../../../hooks/redux';
import { resetState } from '../events.slice';

const ScucessModal = ({
  open,
  setModalOpen,
  eventData,
}: {
  open: boolean;
  setModalOpen: () => void;
  eventData?: any;
}) => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <Modal animationType="slide" visible={open} transparent>
      <View style={styles.modalCotnainer}>
        <View style={styles.contentContainer}>
          <Icons.Success />
          <Text style={styles.congratsText}>Congratulations</Text>
          <Text style={styles.congratsSubText}>
            Event Published Successfully
          </Text>
          <View style={styles.imgContainer}>
            <Image
              source={eventData?.image}
              style={styles.congratsImg}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.date}>
                {`${moment(new Date(eventData?.date)).format(
                  'ddd, MMM YYYY',
                )} . ${moment(new Date(eventData?.time)).format('HH:mm')}`}
              </Text>
              <Text style={styles.nameSuccess}>{eventData?.name}</Text>
            </View>
          </View>
          <Button
            title="Done"
            onPress={() => {
              dispatch(resetState());
              setModalOpen();
              navigation.navigate('GroupsMain');
            }}
          />
          <OutlinedButtonWithIcon title="Share" onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
};

export default ScucessModal;
