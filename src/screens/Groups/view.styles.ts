import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flexGrow: 1,
    paddingBottom: 50,
  },
  noFollowers: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  followNubmerContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followNubmer: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textColor,
  },
  followUserContainer: {
    height: 50,
  },
  followUser: {
    position: 'absolute',
    borderColor: colors.textColor,
    borderWidth: 2,
    borderRadius: 25,
  },
  carousal: { borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  carousalImage: {
    width: '100%',
    height: '100%',
  },
  error: {
    ...fonts.style.heading,
    color: colors.grey,
  },
  name: {
    ...fonts.style.heading,
    width: '100%',
    marginVertical: 10,
    marginTop: 20,
    paddingHorizontal: metrics.containerPadding,
    fontSize: 24,
    fontWeight: '800',
  },
  previewDescription: {
    ...fonts.style.subHeading,
    width: '100%',
    textAlign: 'left',
    marginBottom: 10,
    color: colors.grey,
    paddingHorizontal: metrics.containerPadding,
  },
  categorySelectedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categorySelectedEditHeaderPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  categoryText: {
    ...fonts.style.subHeading,
    marginVertical: 10,
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: metrics.containerPadding,
    textAlign: 'center',
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 25,
    padding: metrics.smallPadding,
    marginRight: 10,
  },
  categoryTileText: {
    ...fonts.style.subHeading,
    textAlign: 'center',
  },
  subCategoryTitleList: {
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
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: metrics.containerPadding,
  },
  socialIcons: {
    marginRight: 10,
  },
  followButton: {
    width: '100%',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAllText: {
    color: colors.primary,
    marginRight: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  teamsList: {
    width: '100%',
    alignItems: 'center',
    margin: 20,
  },
  teamatesListContainer: {
    marginRight: 20,
    alignItems: 'center',
    height: 120,
    justifyContent: 'center',
  },
  teamMemberName: {
    ...fonts.style.label,
    textTransform: 'capitalize',
    marginTop: 5,
  },
  teamMemberRole: {
    color: colors.grey,
    fontSize: 12,
  },
});
