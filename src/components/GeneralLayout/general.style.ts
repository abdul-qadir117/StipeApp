import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
    padding: metrics.containerPadding,
  },
});
