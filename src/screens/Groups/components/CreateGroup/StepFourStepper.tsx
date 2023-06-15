import React from 'react';
import { View } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const StepFourStepper = () => {
  return (
    <View style={styles.stepperRowContainer}>
      <Icons.StepOneComplete />
      <Icons.ColoredLine style={styles.greyLine} />
      <Icons.StepTwoComplete />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepThreeComplete />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepFourActive />
    </View>
  );
};
