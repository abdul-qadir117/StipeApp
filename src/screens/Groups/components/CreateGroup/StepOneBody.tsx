import React from 'react';
import { Text } from 'react-native';
import styles from './createGroup.styles';
import { Input } from '../../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const StepOneBody = ({ role, setRole, error }: any) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.stepOneContainer}>
      <Text style={styles.stepOneHeading}>
        What is your role in this group?
      </Text>
      <Input
        value={role}
        label="Role Title"
        placeholder="Enter here"
        onChange={setRole}
        error={error}
        inputStyles={[error && styles.errorInput, styles.inputStyles]}
      />
    </KeyboardAwareScrollView>
  );
};
