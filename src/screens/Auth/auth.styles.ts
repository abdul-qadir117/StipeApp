import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { Adjust } from '../../utils/mertrics';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: Adjust(335) / 2 - 10,
  },
  termsAndCondition: {
    marginTop: 20,
    marginBottom: 20,
    ...fonts.style.input,
  },
  privacyBottomContainer: {
    marginTop: 24,
  },
  privacyTextPrimary: {
    ...fonts.style.label,
    fontSize: fonts.size.regular,
  },
  privacyTextSec: {
    marginTop: 5,
    ...fonts.style.label,
    fontSize: fonts.size.regular,
    color: colors.placeholder,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginVertical: 22,
    ...fonts.style.heading,
  },
  studentTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldLabel: {
    ...fonts.style.heading,
    bottom: 8,
  },
  questionsContainer: {
    marginTop: 20,
  },
  followLabelContainer: {
    width: '100%',
    alignItems: 'center',
  },
  followOptionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interestsErrorContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  interestsError: {
    color: 'red',
  },
  questionOptionContainer: {
    width: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  profileIcon: {
    width: 100,
    height: 100,
  },
  centerWellcomeNote: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height / 2,
  },
  groupsItem: {
    width: '100%',
    backgroundColor: '#1D1E29',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    height: 80,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionTitle: {
    ...fonts.style.label,
    width: '80%',
  },
  selected: {
    borderWidth: 1,
    borderColor: colors.primary,
  },

  //Intrest Tabs
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
