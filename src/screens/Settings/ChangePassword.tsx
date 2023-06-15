import { InputFormHook, AuthLayout, Input } from '../../components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ChangePasswordType } from '../../types/user.types';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';

const passwordSchema = Yup.object().shape({
  newPassword: Yup.string().required('Passwords is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('newPassword')],
    'Your Passwords do not match.',
  ),
});

const ChangePassword = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordType>({ resolver: yupResolver(passwordSchema) });

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = (params: ChangePasswordType) => {
    const formData: any = new FormData();
    formData.append('password', params.confirmPassword);
    updateUser({
      body: formData,
    });
  };

  return (
    <AuthLayout
      btnTitle="Save"
      onBtnPress={handleSubmit(onSubmit)}
      btnLoading={isLoading}>
      <Input
        label="Old Password"
        placeholder="Enter here"
        value={'********'}
        onChange={() => {}}
      />
      <InputFormHook
        label="New Password"
        name="newPassword"
        control={control}
        placeholder="Enter here"
        error={errors?.newPassword ? errors?.newPassword?.message : ''}
      />
      <InputFormHook
        label="Confirm Passowrd"
        name="confirmPassword"
        control={control}
        placeholder="Enter here"
        error={errors?.confirmPassword ? errors?.confirmPassword?.message : ''}
      />
    </AuthLayout>
  );
};

export default ChangePassword;
