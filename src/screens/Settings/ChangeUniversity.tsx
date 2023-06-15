import { AuthLayout } from '../../components';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import Dropdown from '../../components/Dropdown';
import { useGetUniversitiesQuery } from '../../services/modules/auth.api';
const ChangeUniversity = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const [college, setCollege] = useState<string>('');

  const { data: collegeData } = useGetUniversitiesQuery<any>('');
  const { user } = useAppSelector(state => state.auth);

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = () => {
    if (college === '') {
      setError('University is required');
    }
    if (college !== '') {
      const formData: any = new FormData();
      formData.append('instituteId', college);
      updateUser({
        body: formData,
      });
    }
  };

  return (
    <AuthLayout
      btnTitle="Save"
      onBtnPress={() => {
        onSubmit();
      }}
      btnLoading={isLoading}>
      <Dropdown
        label="University"
        data={collegeData?.data}
        onChange={({ id }: any) => {
          setError('');
          setCollege(id);
        }}
        placeholder={user?.institute?.name}
        error={error ?? ''}
      />
    </AuthLayout>
  );
};

export default ChangeUniversity;
