import { InputFormHook, AuthLayout, Input } from '../../components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ChangePhoneType } from '../../types/user.types';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';

const phoneSchema = Yup.object().shape({
  newNumber: Yup.string().required('Phone Number is required'),
  confirmNumber: Yup.string().oneOf(
    [Yup.ref('newNumber')],
    'Your Phone Number do not match.',
  ),
});

const ChangePhoneNumber = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePhoneType>({ resolver: yupResolver(phoneSchema) });

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = (params: ChangePhoneType) => {
    const formData: any = new FormData();
    formData.append('phone', params.confirmNumber);
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
        label="Your Number"
        placeholder="Enter here"
        value={user.phone}
        onChange={() => {}}
      />
      <InputFormHook
        label="New Number"
        name="newNumber"
        control={control}
        type="phone"
        placeholder="Enter here"
        error={errors?.newNumber ? errors?.newNumber?.message : ''}
      />
      <InputFormHook
        label="Confirm Number"
        name="confirmNumber"
        control={control}
        placeholder="Enter here"
        type="phone"
        error={errors?.confirmNumber ? errors?.confirmNumber?.message : ''}
      />
    </AuthLayout>
  );
};

export default ChangePhoneNumber;
