import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

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
});
