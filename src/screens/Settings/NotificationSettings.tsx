import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import styles from './settings.style';
import { Icons } from '../../assets/images/svgs';
import colors from '../../utils/colors';
const NotificationSettings = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.rowItemContainer}>
        <View style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Pause All</Text>
          <Switch
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={isEnabled ? colors.textColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('groupSettings');
          }}
          style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Groups</Text>
          <Icons.ArrowRight style={styles.leftIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('eventsSettings');
          }}
          style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Events</Text>
          <Icons.ArrowRight style={styles.leftIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationSettings;
