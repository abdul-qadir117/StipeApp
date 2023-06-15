import React from 'react';
import { View, Text } from 'react-native';
import styles from './profileRoles.styles';
import { Icons } from '../../assets/images/svgs/index';

const ProfileRoles = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.topContainer}>
        <Icons.Rectangle />
        <Text style={styles.heading}>My Roles</Text>
      </View> */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
          <View style={styles.iconContainer}>
            <Icons.RoleIcon />
          </View>
          <View>
            <Text style={styles.roletitle}>DJ</Text>
            <Text style={styles.rolesubtitle}>The Earthly Magzine</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileRoles;
