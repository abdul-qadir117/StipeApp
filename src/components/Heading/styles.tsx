import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';

export default StyleSheet.create({
  headerContainer: {
    marginVertical: 20,
  },
  headerTitle: {
    ...fonts.style.largeHeading,
  },
});
