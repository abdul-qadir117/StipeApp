import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import styles from './button.style';

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  type?: 'primary' | 'secondary';
  customStyle?: any;
  Icon?: any;
  IconBtnTitleStyles?: any;
};

const OutlinedButtonWithIcon = ({
  onPress,
  title,
  loading = false,
  type = 'primary',
  customStyle = {},
  Icon,
  IconBtnTitleStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        type === 'primary'
          ? styles.outlinedbuttoncontainer
          : styles.seondaryContainer,
        customStyle,
      ]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.6}>
      {loading ? (
        <ActivityIndicator color={colors.textColor} />
      ) : (
        <View style={styles.iconBtnInnerContainer}>
          {Icon && <Icon width={30} height={30} />}
          <Text style={[styles.titleOutlined, IconBtnTitleStyles]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default OutlinedButtonWithIcon;
