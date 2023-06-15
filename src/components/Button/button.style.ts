import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics, { Adjust } from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    height: 56,
    width: Adjust(335),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginVertical: 2,
  },
  outlinedbuttoncontainer: {
    height: 56,
    width: Adjust(335),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 2,
  },
  title: {
    ...fonts.style.heading,
    fontSize: fonts.size.large,
  },
  outlinedButtonTitle: {
    ...fonts.style.heading,
    fontSize: fonts.size.large,
  },
  titleError: {
    ...fonts.style.heading,
    color: 'red',
    fontSize: fonts.size.large,
  },
  titleOutlined: {
    ...fonts.style.heading,
    color: colors.primary,
    fontSize: fonts.size.large,
    marginLeft: 8,
  },
  seondaryContainer: {
    height: 56,
    width: Adjust(335),
    justifyContent: 'center',
    alignItems: 'center',
  },
  seondaryTitle: {
    ...fonts.style.heading,
    fontSize: fonts.size.large,
    color: colors.primary,
  },
  iconBtnConainer: {
    height: 56,
    width: Adjust(335),
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.containerPadding,
  },
  iconBtnTitle: {
    marginLeft: 8,
  },
  iconBtnInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
