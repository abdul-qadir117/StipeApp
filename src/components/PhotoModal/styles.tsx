import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics, { Adjust } from '../../utils/mertrics';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: colors.darkGrey,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: metrics.containerPadding,
    marginBottom: 30,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInner: {
    width: Adjust(355),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginLeft: -20,
    ...fonts.style.heading,
  },
  socialLinkModalHeading: {
    ...fonts.style.heading,
    marginBottom: 20,
  },
  stepperRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greyLine: {
    marginTop: -20,
  },
  buttonContainer: {
    alignItems: 'center',
    bottom: 0,
    width: '100%',
  },
  cancelButton: {
    backgroundColor: colors.backgroundColor,
  },
  stepOneContainer: {
    marginTop: 20,
    padding: metrics.containerPadding,
    alignItems: 'center',
  },
  stepFiveContainer: {},
  stepFiveContainerPreview: {
    alignItems: 'center',
  },
  stepOneHeading: {
    ...fonts.style.heading,
    marginBottom: 20,
  },
  unlinkModalText: {
    ...fonts.style.subHeadingLarge,
    marginVertical: 20,
    textAlign: 'center',
  },
  successModalText: {
    ...fonts.style.heading,
    textAlign: 'center',
    marginBottom: 15,
  },
  successModalSubText: {
    ...fonts.style.subHeading,
    textAlign: 'center',
    color: colors.grey,
    marginBottom: 15,
  },
  teamInfoModalText: {
    ...fonts.style.subHeadingLarge,
    padding: 20,
    textAlign: 'center',
  },
  addMainCategorySubText: {
    ...fonts.style.subHeadingLarge,
    textAlign: 'center',
    marginTop: 10,
    color: colors.grey,
  },
  addMainCategoryHeaderSubText: {
    ...fonts.style.subHeading,
    textAlign: 'center',
    marginTop: 10,
    color: colors.grey,
  },
  selectCategoryText: {
    ...fonts.style.heading,
    textAlign: 'center',
  },
  selectCategoryLabelContainer: {
    width: '60%',
  },
  AddLogoText: {
    ...fonts.style.subHeadingLarge,
    marginVertical: 20,
    textAlign: 'left',
    width: '100%',
  },
  AddLogoSubText: {
    ...fonts.style.subHeading,
    marginVertical: 10,
    textAlign: 'center',
    width: '100%',
  },
  stepThreeHeading: {
    ...fonts.style.heading,
    marginBottom: 40,
    width: '100%',
    textAlign: 'center',
  },
  bankName: {
    ...fonts.style.subHeadingLarge,
    marginBottom: 5,
  },
  accountNumber: {
    ...fonts.style.subHeading,
    color: colors.grey,
    marginBottom: 10,
  },
  crossIconContainer: {
    width: '100%',
    alignItems: 'flex-end',
    height: 10,
  },
  bankAddedContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  bankAddedInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: metrics.containerPadding,
  },
  buttonSelected: {
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 20,
    width: '90%',
  },
  buttonNotSelected: {
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 20,
  },
  textButtonSelected: {
    ...fonts.style.subHeading,
    color: colors.primary,
  },
  textButtonNotSelected: {
    ...fonts.style.subHeading,
    color: colors.grey,
  },
  isYourGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  questionIcon: {},
  bottomSheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainCategoryModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
  },
  removeCardModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
  },
  socialModelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
  },
  removeCardModalInnerContainer: {
    backgroundColor: colors.darkGrey,
    width: '90%',
    borderRadius: 10,
  },
  socialModalInnerContainer: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    borderRadius: 10,
  },
  mainCategoryModalInnerContainer: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  removeCardBottomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMainCategoryBottomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  purpleCircleSuccess: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  purpleCircleCheckMark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  CheckMark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  unlinkButton: {
    width: '50%',
    marginBottom: 20,
  },
  sussessModalButton: {
    width: '80%',
    marginBottom: 20,
  },
  sussessModalSubButton: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: colors.darkGrey,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  bottomAreaContainer: {
    width: '100%',
    backgroundColor: colors.darkGrey,
  },
  bottomSheetButtonContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.largePadding,
  },
  logoutTitle: {
    ...fonts.style.heading,
    width: '80%',
    textAlign: 'center',
    marginVertical: 20,
  },
  crossContainer: {
    // backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  crossContainerQuestion: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  crossContainerAddMainCategory: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: 10,
  },
  crossContainerChangeLogo: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  publicGroupInfoContainer: {
    backgroundColor: colors.mediumBlack,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.largePadding,
    borderRadius: 20,
    marginBottom: 10,
  },
  modalInnerHeading: {
    ...fonts.style.heading,
    marginBottom: 10,
  },
  modalInnerSubHeading: {
    ...fonts.style.subHeading,
    textAlign: 'center',
  },
  photoButtonLabel: {
    ...fonts.style.subHeading,
  },
  addlogoModalTitle: {
    ...fonts.style.heading,
    marginBottom: 20,
  },
  modalInnerIcon: {
    marginBottom: 10,
  },
  modalQuestionIcon: { marginTop: -80, marginBottom: -20 },
  bankIconContainer: {
    marginRight: 10,
  },
  removeIcon: {
    marginTop: -10,
    marginRight: -10,
    zIndex: 999,
  },
  addImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  addLogoIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 50,
    marginTop: 20,
  },
  iconsContainer: {
    alignItems: 'center',
  },
  PickedImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    padding: 10,
    alignItems: 'center',
    height: 150,
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
  },
  carousalItem: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  carousalItemInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotosText: {
    ...fonts.style.subHeadingLarge,
  },
  carousalImage: {
    width: '100%',
    height: '100%',
  },
  addPhotosDSubText: {
    ...fonts.style.subHeading,
    color: colors.grey,
  },
  descriptionStyles: {
    height: 100,
    width: '100%',
  },
  descriptionErrorStyles: {
    height: 100,
    borderWidth: 1,
    borderColor: colors.error,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: metrics.containerPadding,
  },
  icons: {
    marginRight: 10,
    color: 'red',
  },
  socialHeading: {
    ...fonts.style.subHeading,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  mainCategoryText: {
    ...fonts.style.subHeading,
    marginVertical: 10,
  },
  mainCategoryTextPreview: {
    ...fonts.style.subHeading,
    marginVertical: 10,
    marginLeft: 10,
  },
  groupsHeading: {
    ...fonts.style.subHeading,
    marginLeft: 10,
    marginRight: 10,
  },
  grouplistTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  listRow: {
    flexDirection: 'row',
    padding: metrics.containerPadding,
  },
  eventListHeaderLeftRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCategorySelectedEditHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  mainCategorySelectedEditHeaderPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  addText: {
    color: colors.textColor,
    marginRight: 20,
    fontSize: 18,
    marginLeft: 10,
  },
  seeAllText: {
    color: colors.primary,
    marginRight: 20,
    fontSize: 18,
  },
  teamsList: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    // flexDirection: 'row',
  },
  teamsListPreview: {
    width: '100%',
    alignItems: 'center',
    margin: 20,
  },
  emptyContainer: {
    width: '20%',
    alignItems: 'center',
  },
  tilesTopContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  subcategoriesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    padding: metrics.containerPadding,
    justifyContent: 'center',
  },
  subCategoryFlatlist: {
    alignItems: 'center',
  },
  mainCategoryTile: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 25,
    padding: metrics.containerPadding,
  },
  subCategoryTileList: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
  subCategoryTile: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 25,
    padding: metrics.containerPadding,
    marginRight: 10,
    marginBottom: 10,
  },
  mainCategoryTileSelected: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: metrics.containerPadding,
    marginRight: 10,
  },
  subCategoryTileSelected: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: metrics.containerPadding,
    marginRight: 10,
    marginBottom: 10,
  },
  mainCategoryTileText: {
    ...fonts.style.subHeading,
    textAlign: 'center',
  },
  mainCategorySelectedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainCategoryEditLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainCategoryEditContainer: {
    width: '50%',
    flexDirection: 'row',
    paddingHorizontal: metrics.containerPadding,
  },
  stepSixHeaderContainer: {
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  addTeamateSeachInputStyle: {
    backgroundColor: colors.backgroundColor,
  },
  addTeamateItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
  },
  addTeamateIconContainer: {
    width: '20%',
  },
  addTeamateDescriptionContainer: {
    width: '60%',
    alignItems: 'flex-start',
  },
  addTeamateCheckContainer: {
    width: '20%',
  },
  addTeamitemName: {
    ...fonts.style.label,
    textTransform: 'capitalize',
  },
  addTeamitemNameStepFive: {
    ...fonts.style.label,
    textTransform: 'capitalize',
    marginTop: 5,
  },
  addTeamitemCollegeName: {
    ...fonts.style.subHeading,
    color: colors.grey,
  },
  addTeamitemDegreeType: {
    ...fonts.style.subHeading,
    color: colors.darkGrey,
  },
  teamLabelWithInfoMarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLabelWithInfoMarkContainerPreview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveLinkButton: {
    marginVertical: 20,
  },
  stepfiveTeamatesListContainer: {
    marginRight: 20,
    alignItems: 'center',
    height: 120,
    justifyContent: 'center',
  },
  removeTeamConfirmButton: {
    marginBottom: 20,
  },
  previewName: {
    ...fonts.style.heading,
    width: '100%',
    textAlign: 'left',
    marginVertical: 10,
    paddingHorizontal: metrics.containerPadding,
  },
  previewDescription: {
    ...fonts.style.subHeading,
    width: '100%',
    textAlign: 'left',
    marginBottom: 10,
    color: colors.grey,
    paddingHorizontal: metrics.containerPadding,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  errorText: {
    width: '100%',
    color: colors.error,
    textAlign: 'left',
  },
  socialHeaderContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rectangleSocial: {
    marginRight: 10,
  },
  previewEditButton: {
    width: '45%',
    backgroundColor: colors.backgroundColor,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  previewPublishButton: {
    width: '45%',
  },
  previewPublishButtonDisabled: {
    width: '45%',
    backgroundColor: colors.disabledButton,
  },
  previewButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: metrics.containerPadding,
  },
  fullWidth: {
    width: '100%',
  },
  background: {
    backgroundColor: colors.backgroundColor,
  },
});
