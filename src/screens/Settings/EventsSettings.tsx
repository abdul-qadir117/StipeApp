import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './settings.style';
import { Icons } from '../../assets/images/svgs';
import colors from '../../utils/colors';
const EventsSettings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.rowItemContainer}>
        <View style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Recommended Events</Text>
          <Switch
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={isEnabled ? colors.textColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Tickets Running Out</Text>
          <Icons.ArrowRight style={styles.leftIcon} />
        </View>
      </View>
    </View>
  );
};

export default EventsSettings;
