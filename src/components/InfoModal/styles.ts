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
  crossContainerQuestion: {
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
    paddingHorizontal: metrics.largePadding,
  },
  modalQuestionIcon: { marginTop: -70, marginBottom: -40 },
  infoContainer: {
    padding: 20,
    width: '100%',
  },
  heading: {
    ...fonts.style.heading,
    textAlign: 'center',
    paddingBottom: 10,
  },
  info: {
    ...fonts.style.label,
    textAlign: 'center',
    paddingBottom: 10,
  },
});
