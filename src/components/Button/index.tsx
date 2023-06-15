import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import styles from './button.style';

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  type?: 'primary' | 'secondary';
  customStyle?: any;
  disabled?: boolean;
  textStyle?: any;
};

const CustomButtom = ({
  onPress,
  title,
  loading = false,
  type = 'primary',
  customStyle = {},
  disabled = false,
  textStyle = {},
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        type === 'primary' ? styles.container : styles.seondaryContainer,
        customStyle,
      ]}
      onPress={onPress}
      disabled={loading || disabled}
      activeOpacity={0.6}>
      {loading ? (
        <ActivityIndicator color={colors.textColor} />
      ) : (
        <Text
          style={[
            type === 'primary' ? styles.title : styles.seondaryTitle,
            textStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButtom;
