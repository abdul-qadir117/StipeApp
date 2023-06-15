import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const CreateGroupHeader = ({ onPressBack, headerText }: any) => {
  return (
    <View style={styles.header}>
      <SafeAreaView style={styles.flexContainer}>
        <TouchableOpacity onPress={onPressBack}>
          <Icons.LeftArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{headerText}</Text>
        <View />
      </SafeAreaView>
    </View>
  );
};
