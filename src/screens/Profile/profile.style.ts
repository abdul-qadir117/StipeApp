import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
    paddingBottom: 50,
  },
  photoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 150,
    width: 150,
  },
  iconContainer: {
    backgroundColor: colors.textColor,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    height: metrics.icons.small,
    width: metrics.icons.small,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  linkText: {
    ...fonts.style.subHeading,
    color: colors.backgroundColor,
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  basicInfoContainer: {
    width: '100%',
    paddingVertical: metrics.defaultPadding,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  basicInfoText: {
    ...fonts.style.heading,
  },
  followerText: {
    ...fonts.style.input,
  },
  birtdayText: {
    ...fonts.style.input,
  },
});
