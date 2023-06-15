import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './profileHeader.styles';
import { Icons } from '../../assets/images/svgs/index';
import ImagePicker from 'react-native-image-crop-picker';
import Images from '../../assets/images';
import moment from 'moment';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
const { ImagePickerLogo } = Images;
import { useUserUpdateMutation } from '../../services/modules/user.api';
import { Button } from '..';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../screens/Auth/auth.slice';

const ProfileHeader = ({ user, type }: any) => {
  const [photo, setPhoto] = useState<{
    uri: string;
  }>();
  var years = moment().diff(user?.birthDate, 'years', false);
  const [updateUser, { data, isSuccess }] = useUserUpdateMutation();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const onUpdateProfilePicture = (imageData: any) => {
    const formData: any = new FormData();
    let file = {
      uri: imageData.path,
      type: imageData.mime,
      name: 'photo',
      size: imageData.size,
    };
    formData.append('photo', file);

    updateUser({
      body: formData,
    });
  };
  const dispatch = useAppDispatch();

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
  }, isSuccess);

  function onPressTakePhoto() {
    ImagePicker.openCamera({
      includeBase64: true,
      mediaType: 'photo',
    })
      .then(res => {
        const imageData = {
          uri: `data:${res.mime};base64,${res.data}`,
        };
        onUpdateProfilePicture(res);
        setPhoto(imageData);
      })
      .catch(e => console.log('Error', e));
  }

  function onPressChoosePhoto() {
    ImagePicker.openPicker({
      multiple: false,
      forceJpg: true,
      includeBase64: true,
      mediaType: 'photo',
    })
      .then(res => {
        const imageData = {
          uri: `data:${res.mime};base64,${res.data}`,
        };
        onUpdateProfilePicture(res);
        setPhoto(imageData);
      })
      .catch(e => console.log('Error', e));
  }

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.profileName}>Profile</Text>
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Icons.Ticket />
          </View>
          <View>
            <Image source={Images.Bell} style={styles.bellIcon} />
          </View>
          <View>
            <Icons.Settings />
          </View>
        </View>
      </View>
      <View style={styles.imagePickerContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={
              user?.photo
                ? { uri: user?.photoUrl }
                : photo?.uri
                ? photo
                : ImagePickerLogo
            }
            style={photo?.uri ? styles.profileImage : styles.profileIcon}
          />
        </View>
        {type === 'myprofile' && (
          <TouchableOpacity
            onPress={() => {
              setIsModelOpen(true);
            }}
            style={styles.editPhotoButton}>
            <Text style={styles.editPhotoText}>Edit Photo</Text>
          </TouchableOpacity>
        )}
        <View style={styles.bottomContainer}>
          <Text style={styles.profileType}>{user?.prefPronoun}</Text>
          <Text style={styles.profileName}>
            {`${user?.firstName} `}
            {`${user?.lastName}`}
          </Text>
          <Text style={styles.profileHeaderAge}>{years} y. o.</Text>
          <Text style={styles.profileCollege}>College</Text>
          <Text style={styles.profileDegreeType}>
            {user?.instituteName} {user?.degreeType}
          </Text>
        </View>
        <Modal animationType="slide" visible={isModelOpen} transparent>
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheetButtonContainer}>
              <Button
                title={'Take Photo'}
                customStyle={styles.photoButton}
                onPress={() => {
                  setIsModelOpen(false);
                  onPressTakePhoto();
                }}
              />
              <Button
                title={'Choose Photo'}
                customStyle={styles.photoButton}
                onPress={() => {
                  setIsModelOpen(false);
                  onPressChoosePhoto();
                }}
              />
              <Button
                title={'Cancel'}
                customStyle={styles.CancelButton}
                onPress={() => setIsModelOpen(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default ProfileHeader;
