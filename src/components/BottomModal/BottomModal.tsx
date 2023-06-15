import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import styles from './BottomModal.styles';
import Input from '../Input';

export const BottomModal = ({
  isModalOpen,
  setIsModalOpen,
  heading,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  heading: string;
  info: string;
}) => {
  return (
    <Modal animationType="slide" visible={isModalOpen} transparent>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.crossContainer}>
          <TouchableOpacity onPress={() => setIsModalOpen(false)}>
            <Icons.CrossIconCircular />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSheetButtonContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <View style={styles.infoContainer}>
            <Input
              value={''}
              label="Enter Private Code"
              placeholder="Enter Private Code"
              onChange={() => console.log('')}
              inputStyles={styles.input}
              error={''}
            />
            <TouchableOpacity
              style={[styles.confirmButton]}
              onPress={() => setIsModalOpen(false)}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
