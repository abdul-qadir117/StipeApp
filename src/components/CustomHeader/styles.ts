import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.darkGrey,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: metrics.containerPadding,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginLeft: -20,
    ...fonts.style.heading,
  },
});
