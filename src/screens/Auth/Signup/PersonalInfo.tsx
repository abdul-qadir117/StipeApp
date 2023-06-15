import { InputFormHook } from '../../../components';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import ImagePicker from 'react-native-image-crop-picker';
import { PersonaInfoType } from '../../../types/auth.types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Text } from 'react-native';

import styles from '../auth.styles';
import { Icons } from '../../../assets/images/svgs';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSignUpPayload } from '../auth.slice';
const PersonalInfo = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<PersonaInfoType>();

  const navigation: any = useNavigation();
  const [photo, setPhoto] = useState<{
    uri: string;
  }>();

  const onSubmit = (payload: any) => {
    dispatch(
      updateSignUpPayload({
        key: 'info',
        data: { ...payload, profile: photo },
      }),
    );
    navigation.navigate('signup/termsAndCondition');
  };

  return (
    <AuthLayout
      title="Upload Profile photo"
      btnTitle="Next"
      isSkipButtonRequired={true}
      onBtnPress={handleSubmit(onSubmit)}
      step={4}
      headerTitle="Sign up">
      <TouchableOpacity
        onPress={() => {
          ImagePicker.openPicker({
            multiple: false,
            forceJpg: true,
            includeBase64: true,
            mediaType: 'photo',
            cropping: true,
          })
            .then(res => {
              const imageData = { uri: `data:${res.mime};base64,${res.data}` };
              setPhoto(imageData);
            })
            .catch(e => console.log('Error', e));
        }}
        style={styles.imagePickerContainer}>
        {photo?.uri ? (
          <Image source={photo} style={styles.profileImage} />
        ) : (
          <Icons.ImagePicker />
        )}
      </TouchableOpacity>
      <Text style={styles.heading}>Social links</Text>
      <InputFormHook
        label="Add Instagram handle"
        name="instagramLink"
        control={control}
        placeholder="@name"
      />
      <InputFormHook
        label="Add WhatsApp link"
        name="whatsApp"
        control={control}
        placeholder="Enter WhatsApp number"
      />
      <InputFormHook
        label="Add Linkdin link"
        name="linkdin"
        control={control}
        placeholder="Enter Linkdin link"
      />
      <InputFormHook
        label="Add Spotify link"
        name="spotify"
        control={control}
        placeholder="Enter Spotify link"
      />
      <InputFormHook
        label="Add Souncloud link"
        name="soundcloud"
        control={control}
        placeholder="Enter Souncloud link"
      />
    </AuthLayout>
  );
};

export default PersonalInfo;
