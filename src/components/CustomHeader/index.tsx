import React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets/images/svgs';

const CustomHeader = ({
  title,
  isBackBtnReq = true,
}: {
  title: string;
  isBackBtnReq?: boolean;
}) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.header}>
      <SafeAreaView style={styles.flexContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          {isBackBtnReq && <Icons.LeftArrow />}
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>
        <View />
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;
