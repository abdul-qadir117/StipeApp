import { StyleSheet } from 'react-native';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  orText: {
    ...fonts.style.label,
    paddingBottom: 30,
    paddingTop: 10,
    textAlign: 'center',
  },
  customBtn: {
    marginTop: 20,
    width: '100%',
  },
  forgotText: {
    ...fonts.style.input,
    fontWeight: '500',
    color: colors.primary,
    textAlign: 'right',
  },
});
