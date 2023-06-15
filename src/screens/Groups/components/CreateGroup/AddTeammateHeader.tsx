import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';
import { Input } from '../../../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AddTeammateHeader = ({ setStep, keyword, setKeyword }: any) => {
  return (
    <View style={styles.background}>
      <View>
        <SafeAreaView style={styles.stepSixHeaderContainer}>
          <View style={styles.headerInner}>
            <TouchableOpacity onPress={() => setStep(5)}>
              <Icons.LeftArrow />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Teamate</Text>
            <View />
          </View>
          <Input
            value={keyword}
            label=""
            placeholder="Search Team"
            onChange={setKeyword}
            inputStyles={styles.addTeamateSeachInputStyle}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
