import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {},
  bottomBtn: {
    bottom: 0,
  },
  innerContainerCustom: {
    maxHeight: '85%',
  },
  buttonBackground: {
    backgroundColor: colors.secondaryBackground,
  },
  deleteButton: {
    backgroundColor: colors.backgroundColor,
    borderWidth: 1,
    borderColor: 'red',
  },
  signOutButton: {
    backgroundColor: colors.backgroundColor,
    borderWidth: 1,
    borderColor: colors.textColor,
  },
  interestsErrorContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  interestsError: {
    color: 'red',
  },
  bottomSheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheetButtonContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  photoButton: {
    marginBottom: 20,
    backgroundColor: colors.backgroundColor,
    borderColor: 'red',
    borderWidth: 1,
  },
  CancelButton: {
    marginBottom: 20,
    backgroundColor: 'black',
  },
  logoutTitle: {
    ...fonts.style.heading,
    width: '80%',
    textAlign: 'center',
    marginVertical: 20,
  },
  notificationContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: metrics.containerPadding,
  },
  rowItemContainer: {
    backgroundColor: colors.secondaryBackground,
    width: '100%',
    borderRadius: 15,
    marginTop: 20,
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.containerPadding,
    borderBottomWidth: 1,
  },
  rowLeftText: {
    ...fonts.style.heading,
  },
  helpleftText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: fonts.size.large,
    color: colors.textColor,
    lineHeight: 28,
  },
  helprightText: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: fonts.size.medium,
    color: colors.primary,
    lineHeight: 28,
  },
  leftIcon: {
    marginRight: 15,
  },
});
