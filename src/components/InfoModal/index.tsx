import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icons } from '../../assets/images/svgs';

export const InfoModal = ({
  isModalOpen,
  setIsModalOpen,
  heading,
  info,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  heading: string;
  info: string;
}) => {
  return (
    <Modal animationType="slide" visible={isModalOpen} transparent>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.crossContainerQuestion}>
          <TouchableOpacity onPress={() => setIsModalOpen(false)}>
            <Icons.CrossIconCircular />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSheetButtonContainer}>
          <Icons.CircularWavyQustion
            width={150}
            height={150}
            style={styles.modalQuestionIcon}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.info}>{info}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
