import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../build.styles';
import { Icons } from '../../../assets/images/svgs';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../utils/colors';
const CreateEventButton = ({ disabled }: { disabled: boolean }) => {
  const navgiation: any = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.eventButtonContainer, disabled && styles.borderDark]}
      onPress={() => {
        navgiation.navigate('CreateEvent');
      }}
      disabled={disabled}>
      <View
        style={[
          styles.circularContainer,
          disabled && { backgroundColor: colors.purple },
        ]}>
        {disabled ? <Icons.AddEventDark /> : <Icons.AddEvent />}
      </View>
      <Text style={styles.createNewGroupText}>Create New Event</Text>
      <Text style={styles.createNewEventSubText}>
        To create an event, you need to create a group first
      </Text>
    </TouchableOpacity>
  );
};

export default CreateEventButton;
