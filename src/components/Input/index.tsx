import React, { forwardRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import colors from '../../utils/colors';
import styles from './input.style';
import { Icons } from '../../assets/images/svgs';

type CustomInputType = {
  containerStyles?: object;
  label?: string;
  inputStyles?: object;
  secureTextEntry?: boolean;
  value: string;
  onChange: (t: string) => void;
  error?: string;
  placeholder?: string;
  numberOfLines?: number;
  multiline?: boolean;
};

const CustomInput = forwardRef(
  (
    {
      containerStyles = {},
      label = '',
      inputStyles = {},
      secureTextEntry = false,
      value,
      onChange,
      error = '',
      placeholder = '',
      numberOfLines = 1,
      multiline = false,
    }: CustomInputType,
    ref: any,
  ) => {
    return (
      <View style={[styles.feildContainer, containerStyles]}>
        {label && <Text style={styles.fieldLabel}>{label}</Text>}
        <TextInput
          ref={ref}
          style={[styles.input, inputStyles]}
          onChangeText={(text: string) => onChange(text)}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          value={value}
          multiline={multiline}
          placeholder={placeholder}
          numberOfLines={numberOfLines}
          placeholderTextColor={colors.placeholder}
        />
        {error !== '' && (
          <Text style={styles.errorLabel}>
            <Icons.Warning /> {error}
          </Text>
        )}
      </View>
    );
  },
);

export default CustomInput;
