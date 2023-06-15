import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import styles from './profile.style';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileSocial from '../../components/ProfileSocial';
import ProfileRoles from '../../components/ProfileRoles';
import ProfileEventsAndGroups from '../../components/ProfileEvents&Groups';
import { useGroupQuery } from '../../services/modules/group.api';

const Profile = ({ navigation, route }: any) => {
  const { data: groups } = useGroupQuery({});

  let userProp = route?.params?.userProp;
  const { user } = useAppSelector(state => state.auth);
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <ProfileHeader
            user={userProp ? userProp : user}
            type={userProp ? 'someoneelse' : 'myprofile'}
          />
          <ProfileSocial
            user={userProp ? userProp : user}
            type={userProp ? 'someoneelse' : 'myprofile'}
            onPressAddSocialLinks={() => {
              navigation.navigate('SocialLinks');
            }}
          />
          <ProfileRoles />
          <ProfileEventsAndGroups groups={groups} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
