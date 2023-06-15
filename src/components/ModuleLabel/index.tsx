import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const ModuleLabel = ({
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

export default ModuleLabel;

const styles = StyleSheet.create({
  textBroder: {
    borderLeftColor: colors.primary,
    borderLeftWidth: 5,
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
