import React, { useState } from 'react';
import { AuthLayout } from '../../../components';
import Option from '../../../components/Option';
import { Text, View } from 'react-native';
import styles from '../auth.styles';
import { CommonActions } from '@react-navigation/native';
import { useUserUpdateMutation } from '../../../services/modules/user.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
const PRIVACY = {
  PRIVATE: 'private',
  PUBLIC: 'public',
};
const PrivacyQuestion = ({ navigation }: any) => {
  const [privacy, setPrivacy] = useState<string>(PRIVACY.PRIVATE);
  const [updateUser, { isSuccess, isLoading }] = useUserUpdateMutation();

  useEffectAfterSuccess(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'login' }],
      }),
    );
  }, isSuccess);

  const onSubmit = () => {
    updateUser({
      id: 1,
      body: {
        privacySettings: privacy,
      },
    });
  };

  return (
    <AuthLayout
      title="Set your privacy settings"
      btnTitle="Save"
      onBtnPress={onSubmit}
      isSkipButtonRequired={true}
      btnLoading={isLoading}>
      <Option
        title="Public"
        onPress={() => setPrivacy(PRIVACY.PUBLIC)}
        isSelected={privacy === PRIVACY.PUBLIC}
      />
      <Option
        title="Private"
        onPress={() => setPrivacy(PRIVACY.PRIVATE)}
        isSelected={privacy === PRIVACY.PRIVATE}
      />
      <View style={styles.privacyBottomContainer}>
        <Text style={styles.privacyTextPrimary}>Private</Text>
        <Text style={styles.privacyTextSec}>
          Others will need to send you a follower request to see what groups
          you’re in, the event your attending and your followers/following.
        </Text>
      </View>
    </AuthLayout>
  );
};

export default PrivacyQuestion;
