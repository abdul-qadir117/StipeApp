import fonts from '../../utils/fonts';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
export default StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.containerPadding,
    marginBottom: 15,
  },
  leftContainer: {
    width: '60%',
  },
  rightContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: metrics.containerPadding,
  },
  headerLeftInnerRow: {
    flexDirection: 'row',
    height: 100,
  },
  profileName: {
    ...fonts.style.heading,
    marginTop: 5,
    marginBottom: 5,
  },
  profileCollege: {
    ...fonts.style.subHeading,
    color: colors.grey,
    marginTop: 5,
    marginBottom: 5,
  },
  profileDegreeType: {
    ...fonts.style.subHeading,
    marginBottom: 10,
    fontWeight: '700',
  },
  profileType: {
    color: colors.grey,
    marginHorizontal: 5,
  },
  profileHeaderAge: {
    ...fonts.style.heading,
    marginBottom: 10,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  profileIcon: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 14,
    shadowRadius: 16.0,

    elevation: 24,
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: metrics.containerPadding,
    marginTop: 20,
  },
  editPhotoButton: {
    backgroundColor: colors.primary,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  editPhotoText: {
    ...fonts.style.label,
  },
  bellIcon: {
    marginHorizontal: 10,
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
  },
  CancelButton: {
    marginBottom: 20,
    backgroundColor: 'black',
  },
});
