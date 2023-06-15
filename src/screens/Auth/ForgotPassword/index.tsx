import { InputFormHook } from '../../../components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks/redux';
import { useOtpVerificationMutation } from '../../../services/modules/auth.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import Toast from 'react-native-toast-message';

type FormValues = {
  phoneNumber: string;
};

const ForgotSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('Phone number is required'),
});

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(ForgotSchema) });

  const [otpVerification, { isLoading, isSuccess, originalArgs, data }] =
    useOtpVerificationMutation();
  console.log(data);
  useEffectAfterSuccess(() => {
    Toast.show({
      type: 'success',
      text2: 'OTP sent to your number.',
    });
    navigation.navigate('otp', {
      previousScreen: 'forgot',
      phone: originalArgs,
    });
  }, isSuccess);

  const navigation: any = useNavigation();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSubmit = (data: { phoneNumber: string }) => {
    const body = { phone: data?.phoneNumber, requestFrom: '' };
    otpVerification(body);
  };

  return (
    <AuthLayout
      title="Enter your phonenumber associated with your account"
      btnTitle="Send Verification Code"
      onBtnPress={handleSubmit(onSubmit)}
      isBottomGradient
      btnLoading={isLoading}
      headerTitle="Reset Password">
      <InputFormHook
        label="Phone number"
        name="phoneNumber"
        control={control}
        isSecure={true}
        error={errors?.phoneNumber ? errors?.phoneNumber?.message : ''}
        type="phone"
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
