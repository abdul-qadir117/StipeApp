import React from 'react';
import { View, Text } from 'react-native';
import styles from './dropdown.styles';
import SelectDropdown from 'react-native-select-dropdown';
import { Icons } from '../../assets/images/svgs';

type CustomInputType = {
  containerStyles?: object;
  label?: string;
  onChange: (t: string) => void;
  error?: string;
  placeholder?: string;
  data: Array<any>;
  onSearch?: (keyword: string) => void;
};

const Dropdown = ({
  containerStyles = {},
  label = '',
  onChange,
  data = [],
  error = '',
  placeholder = '',
  onSearch = (keyword: string) => keyword,
}: CustomInputType) => {
  return (
    <View style={[styles.feildContainer, containerStyles]}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <SelectDropdown
        buttonStyle={styles.dropdown}
        data={data}
        defaultButtonText={placeholder}
        onSelect={selectedItem => {
          onChange(selectedItem);
        }}
        searchPlaceHolder={placeholder}
        onChangeSearchInputText={onSearch}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem.name;
        }}
        selectedRowStyle={styles.selectedRow}
        selectedRowTextStyle={styles.selectedRowText}
        buttonTextStyle={styles.dropdownText}
        rowTextForSelection={item => {
          return item?.name;
        }}
      />
      {error !== '' && (
        <Text style={styles.errorLabel}>
          <Icons.Warning /> {error}
        </Text>
      )}
    </View>
  );
};

export default Dropdown;
