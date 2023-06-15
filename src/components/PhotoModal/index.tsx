import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icons } from '../../assets/images/svgs';
import ImagePicker from 'react-native-image-crop-picker';

type PhotoModalType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  label?: string;
  onTakePhoto: (image: { uri: string }) => void;
  onChoosePhoto: (image: { uri: string }) => void;
};
export const PhotoModal = ({
  isOpen,
  setIsOpen,
  label,
  onTakePhoto,
  onChoosePhoto,
}: PhotoModalType) => {
  const onPressTakePhoto = () => {
    ImagePicker.openCamera({
      includeBase64: true,
      cropping: true,
      mediaType: 'photo',
    })
      .then(res => {
        setIsOpen(false);
        const imageData = {
          uri: `data:${res.mime};base64,${res.data}`,
        };
        onTakePhoto(imageData);
      })
      .catch(e => console.log('Error', e));
  };

  const onPressChoosePhoto = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      compressImageQuality: 0.5,
      includeBase64: true,
      cropping: true,
    })
      .then(res => {
        setIsOpen(false);
        const imageData = {
          uri: `data:${res.mime};base64,${res.data}`,
        };
        onChoosePhoto(imageData);
      })
      .catch(e => console.log('Error', e));
  };

  return (
    <Modal animationType="slide" visible={isOpen} transparent>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.crossContainerChangeLogo}>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <Icons.CrossIconCircular />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSheetButtonContainer}>
          <Text style={styles.addlogoModalTitle}>{label ?? 'Add Photo'}</Text>
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
