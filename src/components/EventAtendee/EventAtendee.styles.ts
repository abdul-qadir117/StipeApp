import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: metrics.smallPadding,
  },
  wrapper: {
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    width: 185,
    height: 75,
    justifyContent: 'flex-start',
    marginBottom: 15,
    marginRight: metrics.defaultPadding,
    paddingHorizontal: metrics.defaultPadding,
    paddingVertical: metrics.smallPadding,
  },

  section: {
    flexDirection: 'row',
  },
  Subwrapper: {
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    width: '100%',
    height: 75,
    paddingHorizontal: metrics.defaultPadding,
    paddingVertical: metrics.smallPadding,
    marginBottom: 15,
  },
  singleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: { width: '70%', paddingTop: metrics.smallPadding },
  title: {
    ...fonts.style.heading,
  },
  description: {
    ...fonts.style.input,
  },
  descriptionBold: {
    ...fonts.style.label,
  },
  subtitle: {
    ...fonts.style.subHeadingLarge,
    marginBottom: metrics.smallPadding,
    color: colors.textColor,
  },
  placeCenter: {
    alignSelf: 'center',
  },
  dropdownButton: {
    backgroundColor: colors.textColor,
    width: 90,
    height: 34,
    borderRadius: 24,
  },

  dropdownButtonText: {
    color: 'black',
  },

  buttonBackground: {
    width: 90,
    alignContent: 'center',
  },
  outlinedButton: {
    width: 60,
    height: 34,
    borderColor: colors.whiteBorderColor,
    borderWidth: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContents: 'center',
    paddingVertical: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  exportButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
});
