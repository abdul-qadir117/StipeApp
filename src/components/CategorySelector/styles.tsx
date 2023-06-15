import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  feildContainer: {
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldLabel: {
    ...fonts.style.label,
    bottom: 8,
  },
  errorLabel: {
    ...fonts.style.label,
    fontFamily: fonts.type.regular,
    top: 5,
    color: colors.error,
  },

  fullWidthPurple: {
    width: '100%',
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 25,
  },
  inputTextStyle: {
    fontWeight: '400',
    fontSize: fonts.size.regular,
    lineHeight: 16,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
  },
  innerContainer: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  crossContainer: {
    // backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  headingContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  headingInnerContainer: {
    width: '100%',
  },
  selectCategoryText: {
    ...fonts.style.heading,
    textAlign: 'center',
  },
  selectCategroyTextSec: {
    ...fonts.style.subHeading,
    textAlign: 'center',
    marginTop: 10,
    color: colors.grey,
  },
  categoryOptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTile: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  tilesTopContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mainCategoryTileText: {
    ...fonts.style.subHeading,
    textAlign: 'center',
  },
  bottomAreaContainer: {
    width: '100%',
    backgroundColor: colors.darkGrey,
  },
  removeMargin: { marginTop: 0 },
  deActiveContainer: {
    borderRadius: 30,
    backgroundColor: colors.darkGrey,
    borderWidth: 0.5,
    borderColor: colors.categoryBorder,
  },
  activeContainer: {
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: colors.categoryBorder,
    backgroundColor: colors.primary,
  },
  text: {
    ...fonts.style.input,
    padding: 15,
    fontWeight: '600',
  },
});
