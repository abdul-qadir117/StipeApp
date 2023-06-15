import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './settings.style';
import { Icons } from '../../assets/images/svgs';
const TermsAndConditionsAndPrivacy = ({ navigation }: any) => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.rowItemContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AcceptTAndCs');
          }}
          style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Terms & Conditions</Text>
          <Icons.ArrowRight style={styles.leftIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AcceptPrivacy');
          }}
          style={styles.rowItem}>
          <Text style={styles.rowLeftText}>Privacy Policy</Text>
          <Icons.ArrowRight style={styles.leftIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsAndConditionsAndPrivacy;
