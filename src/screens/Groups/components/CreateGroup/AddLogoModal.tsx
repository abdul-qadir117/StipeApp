import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const AddLogoModal = ({
  addLogoModalOpen,
  setaddLogoModalOpen,
  step,
  onPressTakePhoto,
  onPressChoosePhoto,
}: any) => {
  return (
    <Modal animationType="slide" visible={addLogoModalOpen} transparent>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.crossContainerChangeLogo}>
          <TouchableOpacity onPress={() => setaddLogoModalOpen(false)}>
            <Icons.CrossIconCircular />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSheetButtonContainer}>
          <Text style={styles.addlogoModalTitle}>
            {step === 5 ? 'Add Photos' : 'Add Group Logo'}
          </Text>
          <View style={styles.addLogoIconsContainer}>
            <TouchableOpacity
              onPress={onPressTakePhoto}
              style={styles.iconsContainer}>
              <View style={styles.purpleCircle}>
                <Icons.Camera />
              </View>
              <Text style={styles.photoButtonLabel}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressChoosePhoto}
              style={styles.iconsContainer}>
              <View style={styles.purpleCircle}>
                <Icons.AddImage />
              </View>
              <Text style={styles.photoButtonLabel}>Choose Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
