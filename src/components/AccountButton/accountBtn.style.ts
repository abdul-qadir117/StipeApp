import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { Adjust } from '../../utils/mertrics';

export default StyleSheet.create({
  feildContainer: {
    marginVertical: 20,
  },
  fieldLabel: {
    ...fonts.style.label,
    bottom: 8,
  },
  btnContainer: {
    width: Adjust(335),
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.secondaryBackground,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...fonts.style.label,
  },
  changeText: {
    ...fonts.style.label,
    color: colors.primary,
  },
});
