import { AuthLayout, Input } from '../../components';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import * as Yup from 'yup';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';

const ChangeName = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [firstNameError, setFirstNameError] = useState<any>(null);
  const [lastNameError, setLastNameError] = useState<any>(null);

  const [lastName, setLastName] = useState(user?.lastName);

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = () => {
    if (firstName === '') {
      setFirstNameError('First Name is required');
    }
    if (lastName === '') {
      setLastNameError('Last Name is required');
    }
    if (firstName !== '') {
      setFirstNameError(null);
    }
    if (lastName !== '') {
      setLastNameError(null);
    }
    if (firstName !== '' && lastName !== '') {
      const formData: any = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      updateUser({
        body: formData,
      });
    }
  };

  return (
    <AuthLayout
      btnTitle="Save"
      onBtnPress={() => onSubmit()}
      btnLoading={isLoading}>
      <Input
        label={'First Name'}
        onChange={setFirstName}
        value={firstName}
        placeholder={'First Name'}
        error={firstNameError !== null && firstNameError}
      />
      <Input
        label={'Last Name'}
        onChange={setLastName}
        value={lastName}
        placeholder={'Last Name'}
        error={lastNameError !== null && lastNameError}
      />
    </AuthLayout>
  );
};

export default ChangeName;
