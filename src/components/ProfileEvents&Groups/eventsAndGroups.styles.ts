import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundColor,
  },
  selectedTab: {
    width: '25%',
    alignItems: 'center',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  selectedTabText: {
    ...fonts.style.heading,
  },
  unselectedTabText: {
    fontFamily: fonts.type.bold,
    fontSize: fonts.size.xLarge,
    color: colors.grey,
    lineHeight: 28,
  },
  unSelectedTab: {
    width: '25%',
    alignItems: 'center',
  },
  tabContainer: {
    width: '100%',
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: metrics.containerPadding,
  },
  eventsBody: {
    paddingHorizontal: metrics.containerPadding,
  },
  groupsBody: {
    height: 200,
    padding: metrics.containerPadding,
  },
  bottomItem: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    padding: metrics.containerPadding,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  lastbottomItem: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    padding: metrics.containerPadding,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 400,
  },
  iconContainer: {
    marginRight: 10,
  },
  roleTitleContainer: {
    width: '60%',
  },
  roletitle: {
    ...fonts.style.heading,
  },
  rolesubtitle: {
    ...fonts.style.subHeading,
    marginBottom: 10,
    color: colors.grey,
  },
  dropdownButton: {
    backgroundColor: 'white',
    width: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  circularContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  countText: {
    ...fonts.style.subHeading,
  },
});
