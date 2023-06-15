import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { AuthLayout } from '../../components';
import AccountButton from '../../components/AccountButton';
import { useAppSelector } from '../../hooks/redux';
import styles from './settings.style';

const Settings = ({ navigation }: any) => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <AuthLayout
      btnTitle={'Delete Account'}
      onBtnPress={() => {}}
      bottomBtnStyle={styles.bottomBtn}
      BtnStyles={styles.deleteButton}
      innerContainerCustom={styles.innerContainerCustom}>
      <View style={styles.container}>
        <AccountButton
          label="Preffered Pronouns"
          value={`${user?.prefPronoun}`}
          onPress={() => navigation.navigate('changePronoun')}
        />
        <AccountButton
          label="Phone Number"
          value={user?.phone}
          onPress={() => navigation.navigate('changePhoneNumber')}
        />
        <AccountButton
          label="Email"
          value={user?.email}
          onPress={() => navigation.navigate('changeEmail')}
        />
        <AccountButton
          label="Password"
          value={'********'}
          onPress={() => navigation.navigate('changePassword')}
        />
        <AccountButton
          label="Date of birth"
          value={moment(user?.birthDate).format('MM/DD/YYYY')}
          onPress={() => navigation.navigate('changeDateOfBirth')}
        />
        <AccountButton
          label="Graduation Year"
          value={moment(user?.graduationDate).format('YYYY')}
          onPress={() => navigation.navigate('changeGraduationYear')}
        />
        <AccountButton
          label="College"
          value={user?.college?.name}
          onPress={() => navigation.navigate('changeCollege')}
        />
        <AccountButton
          label="University"
          value={user?.institute?.name}
          onPress={() => navigation.navigate('changeUniversity')}
        />
      </View>
    </AuthLayout>
  );
};

export default Settings;
