import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Modal, Text } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import { AuthLayout } from '../../components';
import ButtomWithIcon from '../../components/Button/ButtonWithIcon';
import { removeStorageData } from '../../lib/asyncStorage';
import styles from './settings.style';
import Button from '../../components/Button';
import CustomErrorButton from '../../components/Button/ErrorButton';

const Settings = ({ navigation }: any) => {
  const { Help, User, Notification, Website, Mic, Heart, Book } = Icons;
  const [isModelOpen, setIsModelOpen] = useState(false);

  const onLogout = async () => {
    await removeStorageData('token');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthBase' }],
      }),
    );
  };

  return (
    <AuthLayout
      BtnStyles={styles.signOutButton}
      btnTitle={'Sign out'}
      onBtnPress={() => setIsModelOpen(true)}>
      <View style={styles.container}>
        <ButtomWithIcon
          Icon={User}
          customStyle={styles.buttonBackground}
          title="Account"
          onPress={() => navigation.navigate('Account')}
        />
        <ButtomWithIcon
          customStyle={styles.buttonBackground}
          Icon={Mic}
          title="Name"
          onPress={() => navigation.navigate('changeName')}
        />
        <ButtomWithIcon
          Icon={Heart}
          customStyle={styles.buttonBackground}
          title="Interest"
          onPress={() => navigation.navigate('changeInterests')}
        />
        <ButtomWithIcon
          customStyle={styles.buttonBackground}
          Icon={Notification}
          title="Notification"
          onPress={() => navigation.navigate('notificationSettings')}
        />
        <ButtomWithIcon
          customStyle={styles.buttonBackground}
          Icon={Help}
          title="Help"
          onPress={() => navigation.navigate('Help')}
        />
        <ButtomWithIcon
          customStyle={styles.buttonBackground}
          Icon={Website}
          title="Youni Website"
          onPress={() => {}}
        />
        <ButtomWithIcon
          Icon={Book}
          customStyle={styles.buttonBackground}
          title="T&Cs + Privacy Policy"
          onPress={() => navigation.navigate('TAndPSettings')}
        />

        <Modal animationType="slide" visible={isModelOpen} transparent>
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheetButtonContainer}>
              <Text style={styles.logoutTitle}>
                Are you sure you want to Sign Out?
              </Text>
              <CustomErrorButton
                title={'Sign Out'}
                customStyle={styles.photoButton}
                onPress={() => {
                  setIsModelOpen(false);
                  onLogout();
                }}
              />
              <Button
                title={'Cancel'}
                customStyle={styles.CancelButton}
                onPress={() => setIsModelOpen(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </AuthLayout>
  );
};

export default Settings;
