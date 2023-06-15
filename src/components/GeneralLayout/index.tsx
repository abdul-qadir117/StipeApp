import React from 'react';
import { View } from 'react-native';
import styles from './general.style';

type GeneralLayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

const AuthLayout = ({ children }: GeneralLayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default AuthLayout;
