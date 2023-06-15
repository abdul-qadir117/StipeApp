import React from 'react';
import { View } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const StepTwoStepper = () => {
  return (
    <View style={styles.stepperRowContainer}>
      <Icons.StepOneComplete />
      <Icons.ColoredLine style={styles.greyLine} />
      <Icons.StepTwoActive />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepThreeInactive />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepFourInactive />
    </View>
  );
};
