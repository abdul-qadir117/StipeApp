import { InputFormHook } from '../../../components';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSignUpPayload } from '../auth.slice';
import { useNavigation } from '@react-navigation/native';
import { AuthLayout } from '../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { PersonaDetailsType } from '../../../types/auth.types';
import { isDateNull } from '../../../utils/helper';
import Dropdown from '../../../components/Dropdown';
import { useGetPronounsQuery } from '../../../services/modules/auth.api';

const personalSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter first name'),
  surName: Yup.string().required('Please enter surname'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Please enter email'),
  confirmEmail: Yup.string()
    .email('Enter a valid email')
    .required('Please enter email'),
  dob: Yup.date().required('Birthday is required'),
  prefPronoun: Yup.string().required('Please select prefered pronoun'),
});

const PersonalDetails = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<PersonaDetailsType>({ resolver: yupResolver(personalSchema) });
  const navigation: any = useNavigation();
  const { data }: any = useGetPronounsQuery('');
  const [dropDownDataUpdated, setDropDownDataUpdated] = useState([]);

  useEffect(() => {
    let dropdownData: any = [];
    data?.map((item: any) => {
      dropdownData.push({
        name: item,
      });
    });
    setDropDownDataUpdated(dropdownData);
  }, [data]);

  const onSubmit = (payload: any) => {
    if (isDateNull(payload?.dob)) {
      setError('dob', { message: 'Date of birth is required' });
    } else {
    }
    dispatch(
      updateSignUpPayload({
        key: 'personal',
        data: {
          firstName: payload?.firstName,
          surName: payload?.surName,
          email: payload?.email,
          dob: payload?.dob,
          prefPronoun: payload?.prefPronoun,
        },
      }),
    );
    navigation.navigate('signup/university/selection');
  };

  return (
    <AuthLayout
      title="Personal details"
      btnTitle="Next"
      onBtnPress={handleSubmit(onSubmit)}
      step={1}
      headerTitle="Sing up">
      <InputFormHook
        label="First name"
        name="firstName"
        control={control}
        placeholder="Enter your first name"
        error={errors?.firstName ? errors?.firstName?.message : ''}
      />
      <InputFormHook
        label="Second name"
        name="surName"
        control={control}
        placeholder="Enter your second name"
        error={errors?.surName ? errors?.surName?.message : ''}
      />
      <Dropdown
        label="Prefered pronoun"
        data={dropDownDataUpdated}
        onChange={({ name }: any) => {
          setValue('prefPronoun', name);
        }}
        placeholder={'Please select'}
        error={errors?.prefPronoun ? errors?.prefPronoun?.message : ''}
      />
      <InputFormHook
        label="Email"
        name="email"
        control={control}
        placeholder="Enter your email"
        error={errors?.email ? errors?.email?.message : ''}
      />
      <InputFormHook
        label="Confirm email"
        name="confirmEmail"
        control={control}
        placeholder="Enter your email"
        error={errors?.confirmEmail ? errors?.confirmEmail?.message : ''}
      />
      <InputFormHook
        label="Birthday"
        name="dob"
        control={control}
        placeholder="DD/MM/YYYY"
        error={errors?.dob ? errors?.dob?.message : ''}
        type="date"
      />
    </AuthLayout>
  );
};

export default PersonalDetails;
