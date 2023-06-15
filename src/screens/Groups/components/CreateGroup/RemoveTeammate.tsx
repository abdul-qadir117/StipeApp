import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';
import { Button } from '../../../../components';

export const RemoveTeammateModal = ({
  isRemoveTeamateModalOpen,
  setIsRemoveTeamateModalOpen,
  onPressUnselectTeamate,
}: any) => {
  return (
    <Modal animationType="slide" visible={isRemoveTeamateModalOpen} transparent>
      <View style={styles.removeCardModalContainer}>
        <View style={styles.removeCardModalInnerContainer}>
          <View style={styles.crossContainer}>
            <TouchableOpacity
              onPress={() => setIsRemoveTeamateModalOpen(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.removeCardBottomContainer}>
            <View style={styles.purpleCircle}>
              <Icons.TeamateIcon />
            </View>
            <Text style={styles.teamInfoModalText}>
              Are you sure you want to remove team member?
            </Text>
            <Button
              customStyle={styles.removeTeamConfirmButton}
              title="Yes, I'm sure"
              onPress={() => {
                onPressUnselectTeamate();
              }}
            />
          </View>
        </View>
        <View style={styles.bottomSheetButtonContainer} />
      </View>
    </Modal>
  );
};
