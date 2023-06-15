import React from 'react';
import { AuthLayout } from '../../../../components';
import { Text } from 'react-native';
import styles from '../../../Auth/auth.styles';
import { useGetTermsQuery } from '../../../../services/modules/auth.api';

const AcceptGroupPrivacy = ({ navigation }: any) => {
  const onAgreed = () => {
    navigation.goBack();
  };
  const { data } = useGetTermsQuery<any>('');

  return (
    <AuthLayout
      title="Group Privacy Policy."
      subTitle="Lucky you a long bit of writing to read!"
      btnTitle="I have read the above and agree"
      onBtnPress={onAgreed}>
      <Text style={styles.termsAndCondition}>{data?.privacy}</Text>
    </AuthLayout>
  );
};

export default AcceptGroupPrivacy;
