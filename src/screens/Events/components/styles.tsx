import { StyleSheet } from 'react-native';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import metrics, { Adjust } from '../../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  noCategory: {
    ...fonts.style.input,
    paddingVertical: 10,
    textAlign: 'center',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  custom: {
    width: '100%',
  },
  halfBtn: {
    width: '48%',
  },
  button: {
    width: '80%',
  },
  tipText: {
    width: '100%',
    ...fonts.style.label,
    paddingBottom: 10,
    color: colors.placeholder,
  },
  tipTextHead: {
    color: colors.textColor,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyLine: {
    marginTop: -20,
  },
  header: {
    width: '100%',
    backgroundColor: colors.darkGrey,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: metrics.containerPadding,
    marginBottom: 24,
  },
  modifiedHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginLeft: -20,
    ...fonts.style.heading,
  },

  //Preview Event
  image: {
    height: 250,
    width: Adjust(metrics.screenWidth - 20),
  },
  address: {
    ...fonts.style.input,
    fontWeight: '600',
    width: 250,
    paddingBottom: 14,
  },
  backBtn: {
    position: 'absolute',
    top: 25,
    left: 10,
    backgroundColor: colors.darkGrey,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  name: {
    ...fonts.style.largeHeading,
    textTransform: 'capitalize',
    paddingTop: 15,
    paddingBottom: 10,
  },
  description: {
    ...fonts.style.label,
    color: colors.grey,
    paddingBottom: 15,
  },
  customMargin: {
    marginVertical: 0,
  },
  date: {
    ...fonts.style.input,
    paddingTop: 10,
    paddingBottom: 15,
  },

  ticketContainerScroll: {
    paddingBottom: 20,
  },
  reviewBtnContainer: {
    width: metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  //Ticket Design
  ticketContainer: {
    backgroundColor: colors.primary,
    padding: metrics.containerPadding,
    marginTop: 20,
    borderRadius: 15,
  },
  ticketHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tiketName: {
    ...fonts.style.heading,
    textAlignVertical: 'center',
  },
  ticketActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBtn: {
    marginRight: 5,
  },
  divider: {
    borderWidth: 1,
    marginVertical: 15,
    borderStyle: 'dashed',
    borderColor: colors.purple,
    width: '100%',
    // position: 'absolute',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
    position: 'absolute',
    left: -25,
  },
  circleRight: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
    position: 'absolute',
    right: -25,
  },
  partition: {
    height: 25,
    borderWidth: 1,
    width: 1,
    borderColor: colors.purple,
  },
  ticketInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  ticketInfoLabel: {
    ...fonts.style.input,
    textAlign: 'center',
  },
  ticketInfoValue: {
    ...fonts.style.subHeadingLarge,
    width: metrics.screenWidth / 3 - 20,
    textAlign: 'center',
  },
  ticketType: {
    backgroundColor: colors.purple,
    padding: 5,
    borderRadius: 4,
  },
  ticketTypeText: {
    ...fonts.style.label,
  },

  //successModal
  modalCotnainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: metrics.screenWidth - 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
  },
  congratsText: {
    ...fonts.style.largeHeading,
    paddingVertical: 10,
  },
  congratsSubText: {
    ...fonts.style.input,
    color: colors.grey,
  },
  imgContainer: {
    padding: 10,
    backgroundColor: colors.backgroundColor,
    width: '100%',
    marginVertical: 10,
    borderRadius: 15,
  },
  congratsImg: {
    height: metrics.screenWidth - 90,
    width: metrics.screenWidth - 90,
  },
  nameSuccess: {
    ...fonts.style.heading,
  },

  //group card
  listRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  bottomItem: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    padding: metrics.containerPadding - 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  roleTitleContainer: {
    width: '60%',
  },
  roletitle: {
    ...fonts.style.heading,
    textTransform: 'capitalize',
  },
  rolesubtitle: {
    ...fonts.style.subHeading,
    marginBottom: 10,
    color: colors.grey,
  },
  groupLogo: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  custombtn: { width: 100, height: 50 },
  buyTicket: {
    marginVertical: 10,
    width: '100%',
  },
});
