import React from 'react';
import { AuthLayout } from '../../components';
import { Text } from 'react-native';
import styles from '../Auth/auth.styles';
import { useGetTermsQuery } from '../../services/modules/auth.api';
const AcceptTermsAndCondition = () => {
  const onAgreed = () => {};
  const { data } = useGetTermsQuery<any>('');
  return (
    <AuthLayout
      title="Youni’s Terms & Conditions."
      subTitle="Lucky you a long bit of writing to read!"
      btnTitle="I Agree"
      onBtnPress={onAgreed}>
      <Text style={styles.termsAndCondition}>{data?.terms}</Text>
    </AuthLayout>
  );
};

export default AcceptTermsAndCondition;
