import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAppDispatch } from '../../hooks/redux';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import { getStorageData } from '../../lib/asyncStorage';
import { useLazyGetMeQuery } from '../../services/modules/user.api';
import { setUser } from '../Auth/auth.slice';
import NetInfo from '@react-native-community/netinfo';
import styles from './splash.styles';
import Toast from 'react-native-toast-message';
import { Button } from '../../components';
import { Icons } from '../../assets/images/svgs';
import colors from '../../utils/colors';

const Splash = () => {
  const navigation: any = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const [getMe, { isSuccess, data: UserData, isError }] = useLazyGetMeQuery();

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setTimeout(async () => {
          await get_async();
        }, 1000);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Network Failed!',
          text2: 'Please connect to the network.',
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffectAfterSuccess(() => {
    if (isSuccess && UserData) {
      dispatch(setUser(UserData));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'HomeBase' }],
        }),
      );
    }
    setIsLoading(false);
  }, isSuccess || isError);

  const setupInitialState = () => {
    getMe('');
  };

  const get_async = async () => {
    const token = await getStorageData('token');
    if (token && token !== null) {
      setupInitialState();
    } else {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Icons.LogoMain />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.bottomContainer}>
          <Button
            title="Log in"
            onPress={() =>
              navigation.navigate('AuthBase', {
                screen: 'login',
              })
            }
          />
          <Button
            title="Create an account"
            type="secondary"
            textStyle={{ color: colors.textColor }}
            onPress={() =>
              navigation.navigate('AuthBase', {
                screen: 'signup/phone',
              })
            }
          />
        </View>
      )}
    </View>
  );
};

export default Splash;
