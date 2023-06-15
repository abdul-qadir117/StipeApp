import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics, { Adjust } from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  innerMainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: metrics.containerPadding,
    width: metrics.screenWidth,
  },
  stepper: {
    marginTop: 22,
    marginBottom: 10,
  },
  innerContainer: {
    maxHeight: '75%',
    width: '100%',
  },
  gradiant: {
    height: '100%',
  },
  headingContainer: {
    width: '100%',
    paddingVertical: 22,
    alignItems: 'flex-start',
  },
  heading: {
    ...fonts.style.heading,
  },
  subHeading: {
    ...fonts.style.input,
    fontSize: fonts.size.large,
    lineHeight: 25,
    color: colors.placeholder,
    marginTop: 10,
  },
  smallSubHeading: {
    ...fonts.style.subHeading,
    color: colors.placeholder,
  },
  btnContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Adjust(335) / 2 - 10,
  },
  alreadyHaveAccountContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    height: 50,
  },
  alreadyHaveAccountText: {
    color: colors.textColor,
    fontSize: 16,
    marginRight: 8,
    fontWeight: '600',
  },
  alreadyHaveAccountButton: {
    color: colors.primary,
    fontSize: 16,
  },
  alreadyHaveAccountButtonContainer: {
    height: 50,
  },
});
