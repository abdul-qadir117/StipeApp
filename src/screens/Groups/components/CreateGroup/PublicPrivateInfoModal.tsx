import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const PublicPrivateInfoModel = ({
  isModelOpen,
  setIsModelOpen,
}: any) => {
  return (
    <Modal animationType="slide" visible={isModelOpen} transparent>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.crossContainerQuestion}>
          <TouchableOpacity onPress={() => setIsModelOpen(false)}>
            <Icons.CrossIconCircular />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSheetButtonContainer}>
          <Icons.CircularWavyQustion
            width={150}
            height={150}
            style={styles.modalQuestionIcon}
          />
          <View style={styles.publicGroupInfoContainer}>
            <Icons.PublicIconSelected style={styles.modalInnerIcon} />
            <Text style={styles.modalInnerHeading}>Public Group</Text>
            <Text style={styles.modalInnerSubHeading}>
              Anyone can view your group, forum and events
            </Text>
          </View>
          <View style={styles.publicGroupInfoContainer}>
            <Icons.PublicIconSelected style={styles.modalInnerIcon} />
            <Text style={styles.modalInnerHeading}>Public Group</Text>
            <Text style={styles.modalInnerSubHeading}>
              Anyone can view your group, forum and events
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
