import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  feildContainer: {
    marginVertical: 15,
    width: '100%',
  },
  fieldLabel: {
    ...fonts.style.label,
    bottom: 8,
    color: colors.feildLabelColor,
  },
  errorLabel: {
    ...fonts.style.label,
    fontFamily: fonts.type.regular,
    top: 5,
    color: colors.error,
  },
  input: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.darkGrey,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: 8,
    ...fonts.style.input,
  },
  phoneInputContianer: {
    width: '100%',
    backgroundColor: colors.darkGrey,
    paddingRight: 5,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  phoneCountry: {
    width: '100%',
    backgroundColor: colors.darkGrey,
  },
  phoneTextInput: {
    backgroundColor: colors.secondaryBackground,
  },
  phoneInput: {
    ...fonts.style.input,
  },
  datepicker: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerText: {
    ...fonts.style.input,
  },
});
