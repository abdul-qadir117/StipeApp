import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const TeamInfoModal = ({
  isTeamInfoModalOpen,
  setIsTeamInfoModalOpen,
}: any) => {
  return (
    <Modal animationType="slide" visible={isTeamInfoModalOpen} transparent>
      <View style={styles.removeCardModalContainer}>
        <View style={styles.removeCardModalInnerContainer}>
          <View style={styles.crossContainer}>
            <TouchableOpacity onPress={() => setIsTeamInfoModalOpen(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.removeCardBottomContainer}>
            <View style={styles.purpleCircle}>
              <Icons.HelpCircle />
            </View>
            <Text style={styles.teamInfoModalText}>
              Team Members can add events, post on the forum and manage your
              group
            </Text>
          </View>
        </View>
        <View style={styles.bottomSheetButtonContainer} />
      </View>
    </Modal>
  );
};
