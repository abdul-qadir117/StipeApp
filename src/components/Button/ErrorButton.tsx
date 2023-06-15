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
};

const CustomErrorButton = ({
  onPress,
  title,
  loading = false,
  type = 'primary',
  customStyle = {},
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        type === 'primary' ? styles.container : styles.seondaryContainer,
        customStyle,
      ]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.6}>
      {loading ? (
        <ActivityIndicator color={colors.textColor} />
      ) : (
        <Text
          style={type === 'primary' ? styles.titleError : styles.seondaryTitle}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomErrorButton;
