import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Button } from '../../../../components';
import { Icons } from '../../../../assets/images/svgs';

export const RemoveCardModel = ({
  isRemoveCardModelOpen,
  setIsRemoveCardModelOpen,
}: any) => {
  return (
    <Modal animationType="slide" visible={isRemoveCardModelOpen} transparent>
      <View style={styles.removeCardModalContainer}>
        <View style={styles.removeCardModalInnerContainer}>
          <View style={styles.crossContainer}>
            <TouchableOpacity onPress={() => setIsRemoveCardModelOpen(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.removeCardBottomContainer}>
            <View style={styles.purpleCircle}>
              <Icons.BankIconAlternate />
            </View>
            <Text style={styles.unlinkModalText}>
              Are you sure want to unlink bank account
            </Text>
            <Button
              customStyle={styles.unlinkButton}
              title="Unlink"
              onPress={() => {}}
              type="primary"
            />
          </View>
        </View>
        <View style={styles.bottomSheetButtonContainer} />
      </View>
    </Modal>
  );
};
