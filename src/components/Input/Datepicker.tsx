import React, { forwardRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './input.style';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import colors from '../../utils/colors';
import { isDateNull } from '../../utils/helper';
import { Icons } from '../../assets/images/svgs';
type DateInputType = {
  containerStyles?: object;
  label?: string;
  inputStyles?: object;
  secureTextEntry?: boolean;
  value: Date;
  onChange: any;
  error?: string;
  placeholder?: string;
  mode?: 'date' | 'time';
  format?: 'DD/MM/YYYY' | 'YYYY' | 'DD-MM-YYYY' | 'MM-DD-YYYY' | 'MM/DD/YYYY';
  minimumDate?: Date;
};

const DatePickerCustom = forwardRef(
  (
    {
      containerStyles = {},
      label = '',
      value,
      onChange,
      error = '',
      placeholder = 'DD/MM/YYYY',
      mode = 'date',
      inputStyles = {},
      format = 'DD/MM/YYYY',
      minimumDate,
    }: DateInputType,
    ref: any,
  ) => {
    const [open, setOpen] = useState(false);
    const IsDateNull = isDateNull(value);

    const onDateChange = (date: any) => {
      setOpen(false);
      onChange(date);
    };

    const getCurrentValue = () => {
      if (mode === 'time') {
        const currentTime = moment(value);
        return currentTime.format('h:mm A');
      } else {
        return moment(value).format(format);
      }
    };

    return (
      <View style={[styles.feildContainer, containerStyles]}>
        {label !== '' && <Text style={styles.fieldLabel}>{label}</Text>}
        <TouchableOpacity
          testID="openModal"
          onPress={() => setOpen(true)}
          style={[styles.input, styles.datepicker, inputStyles]}>
          <Text
            style={[
              styles.datePickerText,
              IsDateNull && { color: colors.placeholder },
            ]}>
            {IsDateNull ? placeholder : getCurrentValue()}
          </Text>
          {mode === 'date' ? <Icons.DatePicker /> : <Icons.TimePicker />}
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          mode={mode}
          date={value}
          onConfirm={onDateChange}
          onCancel={() => setOpen(false)}
          onDateChange={onChange}
          minimumDate={minimumDate}
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

export default DatePickerCustom;
