import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';

export default StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  crossContainer: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  bottomSheetButtonContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.smallPadding,
  },
  infoContainer: {
    width: '100%',
  },
  heading: {
    ...fonts.style.heading,
    textAlign: 'center',
    paddingBottom: metrics.smallPadding,
  },
  input: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    ...fonts.style.input,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  confirmButtonText: {
    color: colors.textColor,
  },
});
