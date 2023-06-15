import React from 'react';
import { AuthLayout } from '../../../components';
import { Text, View } from 'react-native';
import styles from '../auth.styles';
import {
  useGetTermsQuery,
  useSignupMutation,
} from '../../../services/modules/auth.api';

import { useAppSelector } from '../../../hooks/redux';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import Toast from 'react-native-toast-message';
import moment from 'moment';
const TermsAndCondition = ({ navigation }: any) => {
  const [signupAction, { isSuccess }] = useSignupMutation();
  const { data } = useGetTermsQuery('');
  const { signup } = useAppSelector(state => state.auth);
  useEffectAfterSuccess(() => {
    Toast.show({
      type: 'success',
      text1: 'Profile successfully created.',
    });
    navigation.reset({
      index: 0,
      routes: [{ name: 'signup/wellcome' }],
    });
  }, isSuccess);

  const onAgreed = () => {
    const {
      personal,
      phone,
      password,
      interests,
      isStudent,
      isGoUnviersity,
      degree,
      college,
      university,
      info,
      degreeType,
      graduationDate,
    } = signup;

    const formData: any = new FormData();
    formData.append('firstName', personal?.firstName);
    formData.append('lastName', personal?.surName);
    formData.append('prefPronoun', personal.prefPronoun);
    formData.append('isStudent', isStudent ? 1 : 0);
    formData.append('isAlumni', isGoUnviersity ? 1 : 0);
    formData.append('instituteId', university?.id);
    formData.append('collegeId', college?.id);
    formData.append('degreeId', degree?.id);
    formData.append('degreeType', degreeType?.name);
    formData.append('birthDate', moment(personal.dob).format('YYYY-MM-DD'));
    if (graduationDate) {
      formData.append(
        'graduationDate',
        moment(graduationDate).format('YYYY-MM-DD'),
      );
    }
    formData.append('spotify_url', info?.spotify);
    formData.append('phone', phone);
    formData.append('linkedin_url', info?.linkdin);
    formData.append('soundcloud_url', info?.soundcloud);
    formData.append('password', password);
    formData.append('email', personal?.email);
    if (info?.profile?.uri !== '') {
      formData.append('photo', info?.profile);
    }
    interests?.map(item => {
      formData.append('interests', item);
    });
    signupAction(formData);
  };

  return (
    <AuthLayout
      title=""
      btnTitle="I have read the above and agree"
      onBtnPress={onAgreed}
      isBottomGradient={true}
      headerTitle="T&Cs and Privacy Policy">
      <Text style={styles.termsAndCondition}>{data?.terms}</Text>
    </AuthLayout>
  );
};

export default TermsAndCondition;
