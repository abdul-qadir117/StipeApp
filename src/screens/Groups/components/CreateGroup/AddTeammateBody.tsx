import React from 'react';
import styles from './createGroup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AddTeamateItem from './AddTeamate';

export const AddTeammateBody = ({ allUsers, onPressItem }: any) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.stepOneContainer}>
      {allUsers?.map((item: any, index: any) => {
        return (
          <AddTeamateItem
            key={index}
            item={item}
            onPressItem={(role: string) => {
              onPressItem({ ...item, role }, index);
            }}
          />
        );
      })}
    </KeyboardAwareScrollView>
  );
};
