import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './createGroup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icons } from '../../../../assets/images/svgs';

export const StepFourBody = ({
  setaddLogoModalOpen,
  photo,
  setIsRemovePhotoOpen,
}: any) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.stepOneContainer}>
      <Text style={styles.AddLogoText}>Add your Group logo</Text>
      {photo === '' && (
        <TouchableOpacity
          onPress={() => setaddLogoModalOpen(true)}
          style={styles.addImageContainer}>
          <Icons.AddImage />
        </TouchableOpacity>
      )}
      {photo !== '' && (
        <View style={styles.imageContainer}>
          <Image source={photo?.uri && photo} style={styles.PickedImage} />
          <View style={styles.removeImageIcon}>
            <TouchableOpacity
              onPress={() => {
                setIsRemovePhotoOpen(true);
              }}>
              <Icons.Remove width={30} height={30} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {photo === '' && (
        <Text style={styles.AddLogoSubText}>Add Group logo</Text>
      )}
    </KeyboardAwareScrollView>
  );
};
