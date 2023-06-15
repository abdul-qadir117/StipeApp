import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../build.styles';
import { Icons } from '../../../assets/images/svgs';
const CreateGroupButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.groupButtonContainer}>
      <View style={styles.circularContainer}>
        <Icons.AddGroup />
      </View>
      <Text style={styles.createNewGroupText}>Create New Group</Text>
    </TouchableOpacity>
  );
};

export default CreateGroupButton;
