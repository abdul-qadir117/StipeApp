import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import colors from '../../utils/colors';
import styles from './button.style';

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  customStyle?: any;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

const ButtomWithIcon = ({
  onPress,
  title,
  loading = false,
  customStyle = {},
  Icon,
}: ButtonProps) => {
  const { ArrowRight } = Icons;
  return (
    <TouchableOpacity
      style={[styles.iconBtnConainer, customStyle]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.6}>
      {loading ? (
        <ActivityIndicator color={colors.textColor} />
      ) : (
        <>
          <View style={styles.iconBtnInnerContainer}>
            <Icon width={30} height={30} />
            <Text style={[styles.title, styles.iconBtnTitle]}>{title}</Text>
          </View>
          <ArrowRight />
        </>
      )}
    </TouchableOpacity>
  );
};

export default ButtomWithIcon;
