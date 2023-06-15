import { AuthLayout } from '../../components';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import DatePicker from '../../components/Input/Datepicker';
import moment from 'moment';
const ChangeGraduationYear = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const [graduationYear, setGraduationYear] = useState<any>(new Date());
  const { user } = useAppSelector(state => state.auth);

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = () => {
    const formData: any = new FormData();
    formData.append(
      'graduationYear',
      moment(graduationYear).format('YYYY-MM-DD'),
    );
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
        label={'Graduation Year'}
        value={graduationYear}
        onChange={setGraduationYear}
        placeholder={'Enter Graduation Year'}
      />
    </AuthLayout>
  );
};

export default ChangeGraduationYear;
