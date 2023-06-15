import { AuthLayout } from '../../components';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import Dropdown from '../../components/Dropdown';
import { useGetCollegesQuery } from '../../services/modules/auth.api';
const ChangeCollege = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const [college, setCollege] = useState<string>('');

  const { data: collegeData } = useGetCollegesQuery<any>('');
  const { user } = useAppSelector(state => state.auth);

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = () => {
    if (college === '') {
      setError('College is required');
    }
    if (college !== '') {
      const formData: any = new FormData();
      formData.append('collegeId', college);
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
        label="College"
        data={collegeData?.data}
        onChange={({ id }: any) => {
          setError('');
          setCollege(id);
        }}
        placeholder={user?.college?.name}
        error={error ?? ''}
      />
    </AuthLayout>
  );
};

export default ChangeCollege;
