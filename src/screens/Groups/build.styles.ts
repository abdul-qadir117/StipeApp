import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  borderDark: {
    borderColor: colors.purple,
  },
  headerContainer: {
    marginVertical: 20,
    padding: metrics.containerPadding,
  },
  headerTitle: {
    ...fonts.style.largeHeading,
  },
  groupButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height: 203,
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: 'rgba(188, 97, 245, 0.43)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  eventButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 203,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: 'rgba(188, 97, 245, 0.43)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  groupLabel: {
    ...fonts.style.input,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginTop: 5,
  },
  addGroup: {
    width: 80,
    height: 80,
  },
  createNewGroupText: {
    ...fonts.style.heading,
    marginTop: 10,
  },
  createNewEventSubText: {
    ...fonts.style.subHeading,
    marginTop: 10,
    color: colors.grey,
  },
  groupItemContainer: {},
  iconContainer: {},
  circularContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllText: {
    color: colors.primary,
    marginRight: 20,
    fontSize: 18,
  },
  addText: {
    color: colors.textColor,
    marginRight: 20,
    fontSize: 18,
    marginLeft: 10,
  },
  grouplistTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  listRow: {
    flexDirection: 'row',
  },
  customEventItem: {},
  addButtonsContainer: {
    padding: metrics.containerPadding,
  },
  grouplistItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  eventListHeaderLeftRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomItem: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    paddingVertical: metrics.containerPadding,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  roleTitleContainer: {
    width: '60%',
  },
  roletitle: {
    ...fonts.style.input,
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: '500',
  },
  rolesubtitle: {
    ...fonts.style.input,
    width: 170,
    color: colors.grey,
  },
  groupLoader: {
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 85,
    width: 85,
    borderRadius: 10,
  },
  eventMainContainer: { justifyContent: 'space-between', paddingBottom: 10 },
  eventItemContainer: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    paddingVertical: 7,
    height: 124,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  eventCardContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  memberContainer: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 4,
    width: 110,
  },
  goingText: {
    ...fonts.style.label,
    marginLeft: 5,
  },
  eventImg: {
    height: 105,
    width: 105,
    marginRight: 15,
    marginLeft: 12,
    borderRadius: 10,
  },
});
