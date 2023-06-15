import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthLayout, Button } from '../../../components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './otp.style';
import {
  useVerifyOtpMutation,
  useOtpVerificationMutation,
  useLoginMutation,
} from '../../../services/modules/auth.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { CommonActions } from '@react-navigation/native';
import { useAppDispatch } from '../../../hooks/redux';
import { setUserWithToken } from '../auth.slice';
import useCountdown from '../../../hooks/useCountDown';

const ForgotPassword = ({ route, navigation }: any) => {
  const {
    previousScreen,
    phone: { phone },
  } = route.params;
  const dispatch = useAppDispatch();

  const [otpVerification] = useOtpVerificationMutation();

  const [otp, setOtp] = useState('');
  const [verifyOtp, { isLoading, isSuccess, originalArgs }] =
    useVerifyOtpMutation();
  const { countDown, setCountDown } = useCountdown(60);
  const [
    onLogin,
    { data: UserData, isLoading: onLoadingLogin, isSuccess: onSuccessLogin },
  ] = useLoginMutation();

  useEffectAfterSuccess(() => {
    if (UserData) {
      dispatch(setUserWithToken(UserData));
      Toast.show({
        type: 'success',
        text2: 'Logged in successfully.',
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'HomeBase' }],
        }),
      );
    } else {
      Toast.show({
        type: 'error',
        text2: 'Something went wrong!',
      });
    }
  }, onSuccessLogin);

  useEffectAfterSuccess(() => {
    Toast.show({
      type: 'success',
      text2: 'Phone number verified successfully.',
    });
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'choosePassword',
          params: { previousScreen, args: originalArgs },
        },
      ],
    });
  }, isSuccess);

  const onSubmit = () => {
    if (otp.length === 4) {
      verifyOtp({
        // eslint-disable-next-line radix
        otp: parseInt(otp),
        phone: phone,
      });
    }
  };

  return (
    <AuthLayout
      title={'You’ve got a text!!'}
      subTitle={`Enter the code we sent to ${phone}`}
      btnTitle="Verify"
      onBtnPress={onSubmit}
      btnLoading={isLoading || onLoadingLogin}
      headerTitle="Verify">
      <View style={styles.otpContainer}>
        <OTPInputView
          style={styles.container}
          pinCount={4}
          code={otp}
          onCodeChanged={code => {
            setOtp(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            if (previousScreen === 'login') {
              const body = {
                phone: phone,
                otp: parseInt(code, 10),
              };
              onLogin(body);
            } else {
              verifyOtp({
                // eslint-disable-next-line radix
                otp: parseInt(code),
                phone: phone,
              });
            }
          }}
        />

        {countDown === 0 ? (
          <Button
            title="Resend"
            type="secondary"
            onPress={() => {
              setCountDown(60);
              const body = {
                phone,
                requestFrom: previousScreen === 'login' ? ' ' : 'register',
              };
              otpVerification(body);
            }}
          />
        ) : (
          <Text style={styles.resendRequest}>
            Didn’t recieve it?
            {countDown === 0 ? (
              <></>
            ) : (
              <Text style={styles.resendRequest}>
                {' '}
                Retry in
                <Text style={styles.timer}> 00:{countDown}</Text>
              </Text>
            )}
          </Text>
        )}
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
