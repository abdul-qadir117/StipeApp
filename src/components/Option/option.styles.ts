import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryBackground,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    borderRadius: 12,
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    ...fonts.style.heading,
    fontSize: fonts.size.large,
    paddingHorizontal: 5,
  },
  selected: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  Icon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});
