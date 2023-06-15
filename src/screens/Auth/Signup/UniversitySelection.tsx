import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSignUpPayload } from '../auth.slice';
import { AuthLayout } from '../../../components';
import Dropdown from '../../../components/Dropdown';
import { View } from 'react-native';
import {
  useGetUniversitiesQuery,
  useGetCollegesQuery,
  useGetdegreeQuery,
} from '../../../services/modules/auth.api';
import DatePicker from '../../../components/Input/Datepicker';
import LabelWithToggle from '../../../components/LabelWithToggle';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type UniversityDetailType = {
  university: string;
  college: string;
  degreeType: string;
  degree: string;
};

const universitySchema = Yup.object().shape({
  university: Yup.string().required('Please select university'),
  college: Yup.string().required('Please select college'),
  degreeType: Yup.string().required('Please select degree type'),
  degree: Yup.string().required('Please select degree'),
});

const UniversitySelection = ({ navigation }: any) => {
  const [isStudent, setIsStudent] = useState<boolean>(true);
  const [didGoUni, setDidGoUni] = useState<boolean>(true);
  const config =
    isStudent || didGoUni
      ? {
          resolver: yupResolver(universitySchema),
        }
      : {};

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<UniversityDetailType>(config);

  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const { data } = useGetUniversitiesQuery<any>(keyword);
  const { data: collegeData } = useGetCollegesQuery<any>('');
  const { data: degreeData } = useGetdegreeQuery<any>('');
  const [graduationYear, setGraduationYear] = useState<any>(new Date());

  const onSubmit = () => {
    dispatch(
      updateSignUpPayload({
        key: 'isStudent',
        data: isStudent,
      }),
    );
    dispatch(
      updateSignUpPayload({
        key: 'isGoUnviersity',
        data: didGoUni,
      }),
    );
    navigation.navigate('signup/interest');
  };

  const onSearch = (word: string) => setKeyword(word);

  return (
    <AuthLayout
      title="Academic details"
      headerTitle="Sign up"
      step={2}
      btnTitle="Next"
      onBtnPress={didGoUni || isStudent ? handleSubmit(onSubmit) : onSubmit}>
      <LabelWithToggle
        text={'Are you currently a student?'}
        infoDisabled
        isEnabled={isStudent}
        setIsEnabled={val => {
          reset();
          setIsStudent(val);
        }}
      />
      {!isStudent ? (
        <LabelWithToggle
          text={'Did you attend university?'}
          infoDisabled
          isEnabled={didGoUni}
          setIsEnabled={val => {
            reset();
            setDidGoUni(val);
          }}
        />
      ) : (
        <></>
      )}

      {isStudent || didGoUni ? (
        <View>
          <Dropdown
            label="Name of university"
            data={data?.data}
            onSearch={onSearch}
            onChange={({ name, id }: any) => {
              setValue('university', name);
              dispatch(
                updateSignUpPayload({
                  key: 'university',
                  data: { name, id },
                }),
              );
            }}
            placeholder={'Choose your university'}
            error={errors?.university ? errors?.university?.message : ''}
          />
          <Dropdown
            label="Name of college"
            data={collegeData?.data}
            onSearch={onSearch}
            onChange={({ name, id }: any) => {
              setValue('college', name);
              dispatch(
                updateSignUpPayload({
                  key: 'college',
                  data: { name, id },
                }),
              );
            }}
            placeholder={'Choose your College'}
            error={errors?.college ? errors?.college?.message : ''}
          />
          <Dropdown
            label="Degree Type"
            data={[
              { name: 'Undergraduate', id: 1 },
              { name: 'Graduate degree', id: 2 },
              { name: 'Doctorate or professional degree', id: 3 },
            ]}
            onSearch={onSearch}
            onChange={({ name, id }: any) => {
              setValue('degreeType', name);
              dispatch(
                updateSignUpPayload({
                  key: 'degreeType',
                  data: { name, id },
                }),
              );
            }}
            placeholder={'Choose your Degree Type'}
            error={errors?.degreeType ? errors?.degreeType?.message : ''}
          />
          <Dropdown
            label="Enter your degree"
            data={degreeData?.data}
            onSearch={onSearch}
            onChange={({ name, id }: any) => {
              setValue('degree', name);
              dispatch(
                updateSignUpPayload({
                  key: 'degree',
                  data: { name, id },
                }),
              );
            }}
            placeholder={'Choose your Degree'}
            error={errors?.degree ? errors?.degree?.message : ''}
          />
          <DatePicker
            label={'Graduation Year'}
            value={graduationYear}
            onChange={(year: Date) => {
              dispatch(
                updateSignUpPayload({
                  key: 'graduationDate',
                  data: year,
                }),
              );
              setGraduationYear(year);
            }}
            format="YYYY"
            minimumDate={isStudent ? new Date() : undefined}
            placeholder={'Enter Graduation Year'}
          />
        </View>
      ) : (
        <></>
      )}
    </AuthLayout>
  );
};

export default UniversitySelection;
