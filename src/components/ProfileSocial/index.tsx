import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './profileSocial.styles';
import { Icons } from '../../assets/images/svgs/index';

const ProfileSocial = ({ onPressAddSocialLinks, user, type }: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icons.Rectangle />
        <Text style={styles.heading}>Social</Text>
      </View>
      <View style={styles.bottomContainer}>
        {user?.facebook_url && (
          <TouchableOpacity>
            <Icons.FacebookActive style={styles.icons} />
          </TouchableOpacity>
        )}
        {user?.instagram_url && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`http://instagram.com/_u/${user?.instagram_url}`);
            }}>
            <Icons.InstagramActive style={styles.icons} />
          </TouchableOpacity>
        )}
        {user?.tiktok_url && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`https://www.tiktok.com/${user?.tiktok_url}`);
            }}>
            <Icons.TictokInactive style={styles.icons} />
          </TouchableOpacity>
        )}
        {user?.linkedin_url && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                `https://www.linkedin.com/in/${user?.linkedin_url}`,
              );
            }}>
            <Icons.LinkedinInactive style={styles.icons} />
          </TouchableOpacity>
        )}
        {user?.whatsapp_number && (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`whatsapp://send?phone=${user?.whatsapp_number}`);
            }}>
            <Icons.WhatsappInactive style={styles.icons} />
          </TouchableOpacity>
        )}
      </View>
      {type === 'myprofile' && (
        <TouchableOpacity
          onPress={() => {
            onPressAddSocialLinks();
          }}>
          <Text style={styles.linksButton}>{'Add'} Social</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileSocial;
