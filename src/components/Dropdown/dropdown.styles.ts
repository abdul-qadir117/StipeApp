import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  feildContainer: {
    marginVertical: 20,
  },
  fieldLabel: {
    ...fonts.style.label,
    bottom: 8,
  },
  errorLabel: {
    ...fonts.style.label,
    fontFamily: fonts.type.regular,
    top: 5,
    color: colors.error,
  },
  dropdown: {
    width: '100%',
    height: 48,
    backgroundColor: colors.darkGrey,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    borderRadius: 8,
  },
  dropdownText: {
    textAlign: 'left',
    ...fonts.style.input,
  },
  selectedRow: {
    backgroundColor: colors.secondaryBackground,
  },
  selectedRowText: {
    ...fonts.style.input,
  },
});
