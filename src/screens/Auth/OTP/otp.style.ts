import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    height: 100,
    width: '65%',
    marginTop: 20,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    backgroundColor: colors.darkGrey,
    border: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    ...fonts.style.input,
    fontSize: fonts.size.large,
  },
  underlineStyleHighLighted: {
    borderColor: colors.primary,
  },
  switchBotton: {
    width: '60%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  switchContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendRequest: {
    ...fonts.style.input,
  },
  timer: {
    color: 'red',
  },
});
