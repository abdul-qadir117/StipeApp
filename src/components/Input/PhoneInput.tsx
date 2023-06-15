import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './input.style';
import { Icons } from '../../assets/images/svgs';

type CustomInputType = {
  containerStyles?: object;
  label?: string;
  inputStyles?: object;
  value: string;
  onChange: (t: string) => void;
  error?: string;
  placeholder?: string;
};

const PhoneCustomInput = forwardRef(
  (
    {
      containerStyles = {},
      label = 'Phone no.',
      onChange,
      error = '',
      placeholder = '',
    }: CustomInputType,
    ref: any,
  ) => {
    return (
      <View style={[styles.feildContainer, containerStyles]}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <PhoneInput
          ref={ref}
          onChangeFormattedText={onChange}
          containerStyle={styles.phoneInputContianer}
          textContainerStyle={styles.phoneCountry}
          textInputStyle={styles.phoneInput}
          codeTextStyle={styles.phoneInput}
          defaultCode="GB"
          withShadow
          textInputProps={{
            placeholder: placeholder,
          }}
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

export default PhoneCustomInput;
