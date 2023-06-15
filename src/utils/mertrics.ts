import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width,
  screenHeight: height,
  containerPadding: 15,
  defaultPadding: 20,
  largePadding: 30,
  smallPadding: 10,
  cardBorderRadius: 18,
  imageBorderRaduis: 12,
  smallMargin: 10,
  defaultMargin: 20,
  largeMargin: 30,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60,
  },
  images: {
    small: 20,
    medium: 40,
    large: 80,
    logo: 120,
  },
};

const ScreenWidht = Dimensions.get('window').width;
export const Adjust = (num: number) => (num * ScreenWidht) / 375;

export const FlexRowSB = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export default metrics;
