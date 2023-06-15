import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
export default StyleSheet.create({
  mainContainer: {
    display: 'flex',
    marginBottom: 15,
  },
  heading: {
    ...fonts.style.heading,
    marginLeft: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    // flexDirection: 'row',
    padding: metrics.containerPadding,
  },
  icons: {
    marginRight: 10,
  },
  roletitle: {
    ...fonts.style.heading,
    marginVertical: 5,
  },
  rolesubtitle: {
    ...fonts.style.subHeading,
    color: colors.grey,
  },
  bottomItem: {
    width: 150,
    // flexDirection: 'row',
    padding: metrics.containerPadding,
    borderRadius: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
});
