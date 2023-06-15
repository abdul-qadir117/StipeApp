import { Button, InputFormHook } from '../../../components';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { setUserWithToken } from '../auth.slice';
import { useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  useOtpVerificationMutation,
  useLoginemailMutation,
} from '../../../services/modules/auth.api';
import { PhoneLoginType, EmailLoginType } from '../../../types/auth.types';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import { Text } from 'react-native';
import fonts from '../../../utils/fonts';
import OutlinedButtonWithIcon from '../../../components/Button/OutlinedButtonWithIcon';
import loginStyles from './login.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const emailLoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Phone number is required'),
  password: Yup.string().required('Password is Required'),
});
const phoneLoginSchema = Yup.object().shape({
  phone: Yup.string().required('Phone number is required'),
});

const LogIn = ({ route }: any) => {
  const dispatch = useAppDispatch();
  let type = route?.params?.type;
  const [isPhonelogin, setIsPhoneLogin] = useState(
    type === 'email' ? false : true,
  );

  useEffect(() => {
    if (type === 'email') {
      setIsPhoneLogin(false);
    } else {
      setIsPhoneLogin(true);
    }
  }, [type]);

  const {
    control: phoneControl,
    handleSubmit: handleSubmitPhone,
    formState: { errors: PhoneErrors },
  } = useForm<PhoneLoginType>({
    resolver: yupResolver(phoneLoginSchema),
  });

  const {
    control: emailControl,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors },
  } = useForm<EmailLoginType>({
    resolver: yupResolver(emailLoginSchema),
  });
  const navigation: any = useNavigation();

  const [
    otpVerification,
    { isLoading, isSuccess, originalArgs, data: otpdata },
  ] = useOtpVerificationMutation();
  console.log(otpdata);
  const [
    emailLogin,
    {
      isLoading: isLoadingEmailLogin,
      isSuccess: isSuccessEmailLogin,
      data: emailData,
    },
  ] = useLoginemailMutation();

  useEffectAfterSuccess(() => {
    navigation.navigate('otp', {
      previousScreen: 'login',
      phone: originalArgs,
    });
  }, isSuccess);

  useEffectAfterSuccess(() => {
    if (emailData) {
      dispatch(setUserWithToken(emailData));
      navigation.navigate('HomeBase');
    }
  }, isSuccessEmailLogin);

  const onSubmit = (data: any) => {
    if (isPhonelogin) {
      otpVerification({ phone: data?.phone, requestFrom: '' });
    } else {
      emailLogin({
        email: data?.email,
        password: data?.password,
      });
    }
  };
  const onPressForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const onPressEmailLogin = () => {
    setIsPhoneLogin(false);
  };

  const onPressPhoneLogin = () => {
    setIsPhoneLogin(true);
  };

  return (
    <AuthLayout
      title={isPhonelogin ? '' : 'Enter your email & password.'}
      headerTitle="Log in"
      btnTitle={isPhonelogin ? 'Send one time password' : 'Login'}
      showNotHaveAccount
      onPressSwitchToLogin={() => navigation.navigate('signup/phone')}
      onBtnPress={
        isPhonelogin ? handleSubmitPhone(onSubmit) : handleSubmitEmail(onSubmit)
      }
      btnLoading={isLoading || isLoadingEmailLogin}>
      {isPhonelogin ? (
        <InputFormHook
          label="Phone number"
          name="phone"
          control={phoneControl}
          isSecure={true}
          error={PhoneErrors?.phone ? PhoneErrors?.phone?.message : ''}
          type="phone"
        />
      ) : (
        <></>
      )}
      {isPhonelogin ? <Text style={loginStyles.orText}>or</Text> : <></>}
      {isPhonelogin ? (
        <OutlinedButtonWithIcon
          title="Sign in with email and password"
          onPress={onPressEmailLogin}
          customStyle={loginStyles}
        />
      ) : (
        <></>
      )}
      {!isPhonelogin ? (
        <InputFormHook
          label="Email"
          name="email"
          control={emailControl}
          isSecure={false}
          error={emailErrors?.email ? emailErrors?.email?.message : ''}
          placeholder="Enter your email"
        />
      ) : (
        <></>
      )}
      {!isPhonelogin ? (
        <InputFormHook
          label="Password"
          name="password"
          control={emailControl}
          isSecure={true}
          error={emailErrors?.password ? emailErrors?.password?.message : ''}
          placeholder="Enter your password"
        />
      ) : (
        <></>
      )}
      {!isPhonelogin ? (
        <TouchableOpacity onPress={onPressForgot}>
          <Text style={loginStyles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {!isPhonelogin ? (
        <>
          <Text style={loginStyles.orText}>or</Text>
          <OutlinedButtonWithIcon
            title="Sign in with your phone number"
            onPress={onPressPhoneLogin}
            customStyle={loginStyles}
          />
        </>
      ) : (
        <></>
      )}
    </AuthLayout>
  );
};

export default LogIn;
