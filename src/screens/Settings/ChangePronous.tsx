import { AuthLayout, Input } from '../../components';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../Auth/auth.slice';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import Dropdown from '../../components/Dropdown';
import { useGetPronounsQuery } from '../../services/modules/auth.api';

const ChangePrefPronoun = ({ navigation }: any) => {
  const [updateUser, { isSuccess, isLoading, data: updatedData }] =
    useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const [dropDownDataUpdated, setDropDownDataUpdated] = useState([]);
  const [value, setValue] = useState<any>(null);

  useEffectAfterSuccess(() => {
    dispatch(setUser(updatedData));
    navigation.goBack();
  }, isSuccess);
  const { data }: any = useGetPronounsQuery('');

  useEffect(() => {
    let dropdownData: any = [];
    data?.map((item: any) => {
      dropdownData.push({
        name: item,
      });
    });
    dropdownData.push({ name: 'Other' });
    setDropDownDataUpdated(dropdownData);
  }, [data]);

  const onSubmit = () => {
    if (value === null) {
      setValue('');
    }
    const formData: any = new FormData();
    formData.append('prefPronoun', value);

    updateUser({
      body: formData,
    });
  };

  return (
    <AuthLayout
      btnTitle="Save"
      onBtnPress={() => {
        onSubmit();
      }}
      btnLoading={isLoading}>
      <Input
        label="Preffered Pronouns"
        placeholder="Enter here"
        value={user?.prefPronoun}
        onChange={() => {}}
      />
      <Dropdown
        label="New Prefered pronoun"
        data={dropDownDataUpdated}
        onChange={({ name }: any) => {
          setValue(name);
        }}
        placeholder={'Please select'}
        error={value === '' ? 'Prefered Pronoun is required' : ''}
      />
    </AuthLayout>
  );
};

export default ChangePrefPronoun;
