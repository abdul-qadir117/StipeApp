import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

export const HeadingCustom = ({
  text,
  marginReset = false,
  customStyle = {},
}: {
  text: string;
  marginReset?: boolean;
  customStyle?: object;
}) => {
  return (
    <View
      style={[
        styles.textBroder,
        marginReset && styles.marginReset,
        customStyle,
      ]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBroder: {
    borderLeftColor: colors.primary,
    borderLeftWidth: 3,
    marginVertical: 15,
  },
  marginReset: {
    marginVertical: 0,
  },
  text: {
    marginLeft: 10,
    color: colors.textColor,
    fontSize: 17,
    fontWeight: '300',
  },
});
