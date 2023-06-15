import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import GeneralLayout from '../../components/GeneralLayout';
import styles from './profileSocial.styles';
import { Button, InputFormHook } from '../../components';
import { useForm } from 'react-hook-form';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import { setUser } from '../../screens/Auth/auth.slice';
import { useAppDispatch } from '../../hooks/redux';

const SocialLinks = () => {
  const { control, getValues } = useForm<any>();
  const [updateUser, { error, data }] = useUserUpdateMutation();
  console.log(error, data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const onPressAdd = () => {
    let values = getValues();
    const formData: any = new FormData();
    formData.append('instagram_url', values.instagramLink);
    formData.append('facebook_url', values.Facebook);
    formData.append('tiktok_url', values.tikTokLink);
    formData.append('whatsapp_number', values.whatsApp);
    formData.append('linkedin_url', values.Linkedin);
    updateUser({
      body: formData,
    });
  };
  return (
    <GeneralLayout>
      <SafeAreaView>
        <Text style={styles.heading}>Social links</Text>
        <InputFormHook
          label="Instagram (Optional)"
          name="instagramLink"
          control={control}
          placeholder="@name"
        />
        <InputFormHook
          label="Tiktok (Optional)"
          name="tikTokLink"
          control={control}
          placeholder="@name"
        />
        <InputFormHook
          label="Whatsapp (Optional)"
          name="whatsApp"
          control={control}
          placeholder="@name"
        />
        <InputFormHook
          label="Linkedin (Optional)"
          name="Linkedin"
          control={control}
          placeholder="@name"
        />
        <InputFormHook
          label="Facebook (Optional)"
          name="Facebook"
          control={control}
          placeholder="@name"
        />
        <Button
          title={'Save'}
          onPress={() => {
            onPressAdd();
          }}
        />
      </SafeAreaView>
    </GeneralLayout>
  );
};

export default SocialLinks;
