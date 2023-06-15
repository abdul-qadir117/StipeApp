import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Heading = ({ text }: { text: string }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{text}</Text>
    </View>
  );
};

export default Heading;
