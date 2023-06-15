import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icons } from '../../../../assets/images/svgs';
import OutlinedButtonWithIcon from '../../../../components/Button/OutlinedButtonWithIcon';
import metrics from '../../../../utils/mertrics';

export const StepTwoBody = ({
  groupType,
  setGroupType,
  setIsModelOpen,
}: any) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.stepOneContainer}>
      <View style={styles.stepTwoTopCotnainer}>
        <Text style={[styles.stepOneHeading, { width: 'auto' }]}>
          Set your group’s visibility setting
        </Text>
        <TouchableOpacity
          onPress={() => setIsModelOpen(true)}
          style={styles.questionIcon}>
          <Icons.CircularWavyQuestionIcon style={styles.questionIcon} />
        </TouchableOpacity>
      </View>
      <OutlinedButtonWithIcon
        type="primary"
        title="Public"
        IconBtnTitleStyles={
          groupType === 'public'
            ? styles.textButtonSelected
            : styles.textButtonNotSelected
        }
        customStyle={
          groupType === 'public'
            ? styles.buttonSelected
            : styles.buttonNotSelected
        }
        Icon={
          groupType === 'public'
            ? Icons.PublicIconSelected
            : Icons.PublicIconGrey
        }
        onPress={() => {
          setGroupType('public');
        }}
      />
      <OutlinedButtonWithIcon
        type="primary"
        title="Private"
        customStyle={
          groupType === 'private'
            ? styles.buttonSelected
            : styles.buttonNotSelected
        }
        IconBtnTitleStyles={
          groupType === 'private'
            ? styles.textButtonSelected
            : styles.textButtonNotSelected
        }
        Icon={
          groupType === 'private'
            ? Icons.PrivateIconSelected
            : Icons.PrivateIconGrey
        }
        onPress={() => {
          setGroupType('private');
        }}
      />
    </KeyboardAwareScrollView>
  );
};
