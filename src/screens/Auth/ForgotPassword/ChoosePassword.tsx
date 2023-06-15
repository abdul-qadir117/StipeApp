import { InputFormHook } from '../../../components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSignUpPayload } from '../auth.slice';
import { useResetPasswordMutation } from '../../../services/modules/auth.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import { View } from 'react-native';

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

const LoginSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  confirmPassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('newPassword')], 'Your passwords do not match.'),
});

const ConfirmPassword = ({ route, navigation }: any) => {
  const { previousScreen, args } = route.params;
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(LoginSchema) });
  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  useEffectAfterSuccess(() => {
    if (previousScreen !== 'signup') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
      });
    }
  }, isSuccess);

  const onSubmit = (data: any) => {
    if (previousScreen === 'signup') {
      dispatch(
        updateSignUpPayload({
          key: 'password',
          data: data?.newPassword,
        }),
      );
      navigation.navigate('personalDetails');
    } else {
      const body = {
        phone: args?.phone,
        confirmPassword: data?.confirmPassword,
        otp: args.otp,
        password: data?.newPassword,
      };
      resetPassword(body);
    }
  };

  return (
    <AuthLayout
      title={''}
      btnTitle={previousScreen === 'signup' ? 'Sign up' : 'Change Password'}
      onBtnPress={handleSubmit(onSubmit)}
      btnLoading={isLoading}
      isBackBtnReq={previousScreen === 'signup'}
      headerTitle={previousScreen === 'signup' ? 'Sign up' : 'Reset Password'}>
      <View>
        <InputFormHook
          label={
            previousScreen === 'signup' ? 'Create new password' : 'New password'
          }
          name="newPassword"
          control={control}
          isSecure={true}
          error={errors?.newPassword ? errors?.newPassword?.message : ''}
          placeholder="Enter your password"
        />
        <InputFormHook
          label={
            previousScreen === 'signup'
              ? 'Confirmed new password'
              : 'Confirm new password'
          }
          name="confirmPassword"
          control={control}
          isSecure={true}
          error={
            errors?.confirmPassword ? errors?.confirmPassword?.message : ''
          }
          placeholder="Enter your password"
        />
      </View>
    </AuthLayout>
  );
};

export default ConfirmPassword;
