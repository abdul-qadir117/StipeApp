import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  logo: { height: 110, width: 110, borderRadius: 20 },
  grouplistItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  label: {
    ...fonts.style.subHeading,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  labelIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupLabel: {
    ...fonts.style.subHeading,
    fontWeight: '600',
    textTransform: 'capitalize',
    maxWidth: 100,
  },
  checkBoxContainer: { position: 'absolute', right: 5, top: 5 },
  instruction: {
    ...fonts.style.label,
    color: colors.placeholder,
    marginTop: 22,
  },
  description: {
    height: 100,
    paddingVertical: 20,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: metrics.screenWidth - metrics.containerPadding,
  },
  imagePicker: {
    height: 390,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    backgroundColor: colors.darkGrey,
    marginTop: 50,
  },
  imagePickerText: {
    ...fonts.style.label,
    fontSize: 18,
    marginTop: 5,
  },
  imagePickerPlaceholder: {
    ...fonts.style.label,
    color: colors.grey,
    textAlign: 'center',
    width: metrics.screenWidth - 100,
  },
  eventImage: {
    height: '100%',
    width: '100%',
  },
  errorLabel: {
    ...fonts.style.label,
    fontFamily: fonts.type.regular,
    top: 5,
    color: colors.error,
  },
  removeIcon: {
    top: -10,
    right: 10,
    position: 'absolute',
    zIndex: 999,
  },
  customInput: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
  },
  fullWidthPurple: {
    width: '100%',
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  whiteText: {
    color: colors.textColor,
    paddingHorizontal: 5,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderToggleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: metrics.screenWidth - metrics.containerPadding,
    paddingVertical: 5,
  },

  ticketContainerScroll: {
    paddingBottom: 20,
  },
  chooseTicket: {
    ...fonts.style.subHeadingLarge,
    textAlign: 'center',
    paddingBottom: 10,
  },
  ticketOption: {
    width: metrics.screenWidth - metrics.containerPadding,
  },
  ticketBtnContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    marginTop: 20,
    width: metrics.screenWidth,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customMargin: {
    marginBottom: 70,
  },
});
