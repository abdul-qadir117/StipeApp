import { AuthLayout } from '../../components';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import DatePicker from '../../components/Input/Datepicker';
import moment from 'moment';
const ChangeDateOfBirth = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const [dateOfBirth, setDateOfBirth] = useState<any>(new Date());

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = () => {
    const formData: any = new FormData();
    formData.append('birthDate', moment(dateOfBirth).format('YYYY-MM-DD'));
    updateUser({
      body: formData,
    });
  };
  return (
    <AuthLayout
      btnTitle="Save"
      onBtnPress={() => onSubmit()}
      btnLoading={isLoading}>
      <DatePicker
        label={'Date of Birth'}
        value={dateOfBirth}
        onChange={setDateOfBirth}
        placeholder={'Enter Date of Birth'}
      />
    </AuthLayout>
  );
};

export default ChangeDateOfBirth;
