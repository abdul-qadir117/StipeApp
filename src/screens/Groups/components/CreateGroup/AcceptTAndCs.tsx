import React from 'react';
import { AuthLayout } from '../../../../components';
import { Text } from 'react-native';
import styles from '../../../Auth/auth.styles';
import { useGetTermsQuery } from '../../../../services/modules/auth.api';
const AccepGrouptTermsAndCondition = ({ navigation }: any) => {
  const onAgreed = () => {
    navigation.goBack();
  };
  const { data } = useGetTermsQuery<any>('');
  return (
    <AuthLayout
      title="Group Terms & Conditions."
      subTitle="Lucky you a long bit of writing to read!"
      btnTitle="I have read the above and agree"
      onBtnPress={onAgreed}>
      <Text style={styles.termsAndCondition}>{data?.terms}</Text>
    </AuthLayout>
  );
};

export default AccepGrouptTermsAndCondition;
