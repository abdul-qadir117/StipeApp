import React from 'react';
import { View } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const StepOneStepper = () => {
  return (
    <View style={styles.stepperRowContainer}>
      <Icons.StepOneActive />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepTwoInactive />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepThreeInactive />
      <Icons.GreyLine style={styles.greyLine} />
      <Icons.StepFourInactive />
    </View>
  );
};
