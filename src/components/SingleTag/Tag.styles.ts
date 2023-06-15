import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    height: 33,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
    borderRadius: 24,
    borderColor: colors.grey,
    borderWidth: 1,
    marginRight: 4,
  },
  title: {
    ...fonts.style.input,
    fontSize: fonts.size.medium,
    color: colors.textColor,
    marginLeft: 3,
  },
  icon: {
    height: 18,
    width: 18,
  },
  outlinedButtonTitle: {
    ...fonts.style.heading,
    fontSize: fonts.size.large,
  },

  iconBtnInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
