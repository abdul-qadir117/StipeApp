import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Button } from '../../../../components';
import { Icons } from '../../../../assets/images/svgs';

export const RemovePhotoModel = ({
  isRemovePhotoOpen,
  setIsRemovePhotoOpen,
  setPhoto,
}: any) => {
  return (
    <Modal animationType="slide" visible={isRemovePhotoOpen} transparent>
      <View style={styles.removeCardModalContainer}>
        <View style={styles.removeCardModalInnerContainer}>
          <View style={styles.crossContainer}>
            <TouchableOpacity onPress={() => setIsRemovePhotoOpen(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.removeCardBottomContainer}>
            <View style={styles.purpleCircle}>
              <Icons.AddImage />
            </View>
            <Text style={styles.unlinkModalText}>
              Are you sure want to remove this photo?
            </Text>
            <Button
              customStyle={styles.unlinkButton}
              title="Remove"
              onPress={() => {
                setIsRemovePhotoOpen(false);
                setPhoto('');
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
