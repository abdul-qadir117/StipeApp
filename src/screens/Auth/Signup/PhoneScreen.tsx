import { InputFormHook } from '../../../components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSignUpPayload } from '../auth.slice';
import { useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useOtpVerificationMutation } from '../../../services/modules/auth.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Phonechema = Yup.object().shape({
  phone: Yup.string().required('Phone number is required'),
});

const PhoneScreen = () => {
  const dispatch = useAppDispatch();
  const [
    otpVerification,
    { isLoading, isSuccess, originalArgs, data: otpData },
  ] = useOtpVerificationMutation();
  console.log(otpData);
  useEffectAfterSuccess(() => {
    dispatch(updateSignUpPayload({ key: 'phone', data: originalArgs?.phone }));
    Toast.show({
      type: 'success',
      text2: 'OTP sent to your number.',
    });
    navigation.navigate('otp', {
      previousScreen: 'signup',
      phone: originalArgs,
    });
  }, isSuccess);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ phone: string }>({ resolver: yupResolver(Phonechema) });
  const navigation: any = useNavigation();

  const onSubmit = (data: any) => {
    otpVerification({ phone: data?.phone, requestFrom: 'forgotPassword' });
  };

  const switchToLogin = () => {
    navigation.navigate('login');
  };

  return (
    <AuthLayout
      title="Can we have your number?"
      subTitle="We will send a verification code by SMS"
      btnTitle="Send Verification Code"
      onBtnPress={handleSubmit(onSubmit)}
      showAlreadyHaveAccount
      onPressSwitchToLogin={switchToLogin}
      btnLoading={isLoading}
      headerTitle="Sign up">
      <InputFormHook
        label="Phone number"
        name="phone"
        control={control}
        isSecure={true}
        error={errors?.phone ? errors?.phone?.message : ''}
        type="phone"
      />
    </AuthLayout>
  );
};

export default PhoneScreen;
