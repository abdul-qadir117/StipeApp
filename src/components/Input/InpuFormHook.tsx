import React from 'react';
import { useController } from 'react-hook-form';
import Input from '.';
import PhoneInput from './PhoneInput';
import DatePicker from './Datepicker';

const InputFormHook = ({
  label,
  type = 'text',
  name,
  control: internalControl,
  isSecure = false,
  error = '',
  placeholder = '',
  inputStyle = {},
  multiline = false,
  numberOfLines = 1,
  mode = 'date',
}: {
  label?: string;
  name: string;
  type?: 'phone' | 'text' | 'date';
  control: any;
  isSecure?: boolean;
  error?: string;
  placeholder?: string;
  inputStyle?: any;
  multiline?: boolean;
  numberOfLines?: number;
  mode?: 'date' | 'time';
}) => {
  const { field } = useController({
    name,
    control: internalControl,
    defaultValue: type === 'date' ? new Date() : '',
  });
  return type === 'phone' ? (
    <PhoneInput
      label={label}
      onChange={field.onChange}
      value={field.value}
      error={error}
      placeholder={placeholder}
    />
  ) : type === 'text' ? (
    <Input
      label={label}
      onChange={field.onChange}
      value={field.value}
      secureTextEntry={isSecure}
      error={error}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
      inputStyles={inputStyle}
    />
  ) : (
    <DatePicker
      label={label}
      onChange={field.onChange}
      value={field.value}
      error={error}
      placeholder={placeholder}
      inputStyles={inputStyle}
      mode={mode}
    />
  );
};

export default InputFormHook;
