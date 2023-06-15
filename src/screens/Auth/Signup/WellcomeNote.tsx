import React from 'react';
import { AuthLayout } from '../../../components';
import { View } from 'react-native';

import authStyles from '../auth.styles';
import { Icons } from '../../../assets/images/svgs';
const WellcomeNote = ({ navigation }: any) => {
  return (
    <AuthLayout
      btnTitle={'Let’s get going!'}
      onBtnPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      }}
      headerTitle="Account created!"
      isBackBtnReq={false}>
      <View style={authStyles.centerWellcomeNote}>
        <Icons.Welcome />
      </View>
    </AuthLayout>
  );
};

export default WellcomeNote;
