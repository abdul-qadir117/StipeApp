import React from 'react';
import { View, Text } from 'react-native';
import styles from './settings.style';
const Help = () => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.rowItemContainer}>
        <View style={styles.rowItem}>
          <Text style={styles.helpleftText}>Tech</Text>
          <Text style={styles.helprightText}>Contact Now</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.helpleftText}>Financial (refund, etc)</Text>
          <Text style={styles.helprightText}>Contact Now</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.helpleftText}>Report someone/group</Text>
          <Text style={styles.helprightText}>Contact Now</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.helpleftText}>Other</Text>
          <Text style={styles.helprightText}>Contact Now</Text>
        </View>
      </View>
    </View>
  );
};

export default Help;
