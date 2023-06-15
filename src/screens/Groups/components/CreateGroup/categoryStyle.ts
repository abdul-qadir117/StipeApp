import { StyleSheet } from 'react-native';
import colors from '../../../../utils/colors';
import fonts from '../../../../utils/fonts';
import metrics from '../../../../utils/mertrics';

export default StyleSheet.create({
  mainCategoryModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
  },
  emptyContainer: {
    width: '20%',
    alignItems: 'center',
  },
  crossContainerAddMainCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cateInnerContainer: {
    backgroundColor: colors.backgroundColor,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    paddingBottom: 15,
  },
  categoryOptionContainer: {
    paddingBottom: 20,
  },
  categoryTile: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  bottomAreaContainer: {
    width: '100%',
  },
  tilesTopContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
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
  intrestLabel: {
    ...fonts.style.label,
    fontWeight: '300',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
