import React from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';
import styles from './accountBtn.style';

type AccountButtonType = {
  label: string;
  value: string;
  onPress: () => void;
};

const AccountButton = ({ label, value, onPress }: AccountButtonType) => {
  return (
    <View style={[styles.feildContainer]}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={styles.text}>{value}</Text>
        <Text style={styles.changeText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountButton;
