import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import colors from '../../utils/colors';
import { Adjust } from '../../utils/mertrics';
import fonts from '../../utils/fonts';

type GoogleAutoPlacesType = {
  onSelectAddress?: any;
  label?: string;
  error?: string;
};

const GoogleAutoPlaces = ({
  onSelectAddress,
  label,
  error,
}: GoogleAutoPlacesType) => {
  return (
    <View style={[styles.feildContainer]}>
      {label && <Text style={styles.fieldLabel}>{label}</Text>}
      <GooglePlacesAutocomplete
        placeholder="eg. 2464 Royal Ln. Mesa, New Jersey 45463"
        onPress={data => {
          onSelectAddress(data?.description);
        }}
        textInputProps={{
          placeholderTextColor: colors.placeholder,
        }}
        styles={{
          textInput: {
            width: Adjust(355),
            height: 48,
            paddingHorizontal: 16,
            backgroundColor: colors.transparent,
            borderWidth: 1,
            borderColor: colors.inputBorderColor,
            borderRadius: 8,
            ...fonts.style.input,
          },
          container: {
            width: Adjust(355),
          },
        }}
        query={{
          key: 'AIzaSyCiKJ4Gxzqpt9VFIHjfEEW-NWpqCs14Hn4',
          language: 'en',
        }}
      />
      {error !== '' && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

export default GoogleAutoPlaces;
