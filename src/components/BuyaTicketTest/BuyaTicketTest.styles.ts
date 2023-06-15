import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

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
    marginBottom: 15,
  },
  quantity: {
    textAlign: 'right',
    ...fonts.style.label,
  },
  titleContainer: { width: '70%', paddingTop: metrics.smallPadding },
  title: {
    ...fonts.style.label,
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
  ticketsSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: metrics.smallPadding,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.defaultPadding,
  },
  checkoutButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
});
