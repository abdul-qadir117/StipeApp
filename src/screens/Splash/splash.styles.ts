import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  bottomContainer: {
    position: 'absolute',
    bottom: 50,
  },
});
