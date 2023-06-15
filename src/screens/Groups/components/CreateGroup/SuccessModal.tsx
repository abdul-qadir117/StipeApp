import React from 'react';
import { Text, Modal, View } from 'react-native';
import styles from './createGroup.styles';
import { Button } from '../../../../components';
import { Icons } from '../../../../assets/images/svgs';

export const SuccessModal = ({
  isSuccessModalOpen,
  setIsSuccessOpen,
  navigation,
}: any) => {
  return (
    <Modal animationType="slide" visible={isSuccessModalOpen} transparent>
      <View style={styles.removeCardModalContainer}>
        <View style={styles.removeCardModalInnerContainer}>
          <View style={styles.crossContainer} />
          <View style={styles.removeCardBottomContainer}>
            <View style={styles.purpleCircleSuccess}>
              <Icons.SuccessCreateGroup />
            </View>
            <Text style={styles.successModalText}>Congratulation!!</Text>
            <Text style={styles.successModalSubText}>
              Your group is now setup 😍
            </Text>
            <Button
              customStyle={styles.sussessModalButton}
              title="Take me to my group"
              onPress={() => {
                setIsSuccessOpen(false);
                navigation.goBack();
              }}
              type="primary"
            />
            <Button
              customStyle={styles.sussessModalSubButton}
              title="Create an event"
              onPress={() => {
                setIsSuccessOpen(false);
                navigation.goBack();
              }}
              type="primary"
            />
          </View>
        </View>
        <View style={styles.bottomSheetButtonContainer} />
      </View>
    </Modal>
  );
};
