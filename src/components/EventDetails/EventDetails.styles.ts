import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F0F0F',
    paddingTop: metrics.smallPadding,
  },
  wrapper: {
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    justifyContent: 'flex-start',
    width: '100%',
    padding: metrics.smallPadding,
    marginBottom: 15,
  },
  Subwrapper: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 16,
    width: '100%',
    paddingHorizontal: metrics.defaultPadding,
    paddingTop: metrics.smallPadding,
    marginBottom: 15,
  },
  Subwrapper1: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    width: '100%',
    padding: metrics.defaultPadding,
    marginBottom: 15,
    borderColor: '#565656',
    borderWidth: 1,
  },
  singleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.smallPadding,
  },
  titleContainer: { width: '70%', paddingTop: metrics.smallPadding },
  title: {
    ...fonts.style.heading,
    marginBottom: metrics.smallPadding,
  },
  description: {
    ...fonts.style.input,
  },
  descriptionBold: {
    ...fonts.style.label,
  },
  subtitle: {
    ...fonts.style.subHeadingLarge,
    marginBottom: metrics.smallPadding,
    color: colors.textColor,
  },
  placeCenter: {
    alignSelf: 'center',
  },
  filledButton: {
    backgroundColor: colors.primary,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    width: 175,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlinedButton: {
    backgroundColor: colors.transparent,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    borderColor: '#8D8D8D',
    borderWidth: 1,
    width: 175,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: colors.textColor,
    fontWeight: '500',
    fontSize: fonts.size.large,
  },
  canelEvent: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: fonts.size.large,
    textDecorationLine: 'underline',
    marginTop: metrics.defaultPadding,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    height: 300,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  bottomSheetButtonContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.smallPadding,
  },
  modalMessage: {
    fontSize: fonts.size.default,
    color: colors.textColor,
    marginVertical: metrics.defaultPadding,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButtonYes: {
    marginLeft: metrics.smallPadding,
    backgroundColor: colors.primary,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonNo: {
    marginLeft: metrics.smallPadding,
    backgroundColor: colors.darkGrey,
    borderRadius: 10,
    width: 150,
    height: 50,
    alignItems: 'center',
    borderColor: colors.textColor,
    borderWidth: 1,
    justifyContent: 'center',
  },
  modalButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
  input: {
    color: colors.textColor,
    height: 45,
  },
});
