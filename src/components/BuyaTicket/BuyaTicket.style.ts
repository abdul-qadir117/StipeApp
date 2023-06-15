import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics, { Adjust } from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: metrics.smallPadding,
  },
  wrapper: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    borderRadius: 16,
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: metrics.smallPadding,
  },
  ticketBar: {
    paddingVertical: metrics.smallPadding,
  },
  promoInput: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    paddingHorizontal: metrics.smallPadding,
  },
  input: {
    width: Adjust(355),
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    ...fonts.style.input,
  },

  inputContainer: {
    borderColor: colors.grey,
    borderWidth: 1,
  },
  titleContainer: { width: '70%' },
  title: {
    ...fonts.style.subHeadingLarge,
  },
  subtitle: {
    ...fonts.style.subHeading,
    marginBottom: metrics.smallPadding,
    color: colors.textColor,
  },
  timings: {
    ...fonts.style.subHeading,
    marginBottom: metrics.smallPadding,
    color: colors.grey,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.defaultPadding,
  },

  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    width: 245,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: colors.disabledButton,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    width: 245,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
});
