import { InputFormHook, AuthLayout, Input } from '../../components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ChangeEmailType } from '../../types/user.types';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';

const emailSchema = Yup.object().shape({
  newEmail: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  confirmEmail: Yup.string()
    .email('Enter a valid email')
    .oneOf([Yup.ref('newEmail')], 'Your email do not match.'),
});

const ChangeEmail = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailType>({ resolver: yupResolver(emailSchema) });

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = (params: ChangeEmailType) => {
    const formData: any = new FormData();
    formData.append('email', params.newEmail);
    formData.append('confirm_email', params.confirmEmail);

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
        label="Your Email"
        placeholder="Enter here"
        value={user?.email}
        onChange={() => {}}
      />
      <InputFormHook
        label="New Email"
        name="newEmail"
        control={control}
        placeholder="Enter here"
        error={errors?.newEmail ? errors?.newEmail?.message : ''}
      />
      <InputFormHook
        label="Confirm Email"
        name="confirmEmail"
        control={control}
        placeholder="Enter here"
        error={errors?.confirmEmail ? errors?.confirmEmail?.message : ''}
      />
    </AuthLayout>
  );
};

export default ChangeEmail;
