import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './option.styles';

type OptionProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  customContainer?: any;
  Icon?: any;
  type?: 'icon' | 'img';
};

const Option = ({
  onPress,
  title,
  isSelected = false,
  customContainer,
  Icon,
  type = 'img',
}: OptionProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, customContainer, isSelected && styles.selected]}
      onPress={onPress}
      activeOpacity={0.6}>
      {Icon ? (
        type === 'img' ? (
          <Image source={Icon} style={styles.Icon} />
        ) : (
          <Icon />
        )
      ) : (
        <></>
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Option;
