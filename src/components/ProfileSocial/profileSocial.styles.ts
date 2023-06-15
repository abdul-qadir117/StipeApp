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
  linksButton: {
    ...fonts.style.heading,
    color: colors.primary,
    marginLeft: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: metrics.containerPadding,
  },
  icons: {
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
