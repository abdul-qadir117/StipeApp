import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';

export default StyleSheet.create({
  label: {
    ...fonts.style.subHeading,
    textTransform: 'capitalize',
  },
  labelIconContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },

  renderToggleHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
