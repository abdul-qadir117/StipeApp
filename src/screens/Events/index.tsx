import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GeneralLayout from '../../components/GeneralLayout';
import NavBar from '../../components/NavHeader/Navbar';
import Explore from '../../components/Explore';
import ForYou from '../../components/ForYou/ForYou';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';
// import { useNavigation } from '@react-navigation/native';

const Events = () => {
  // const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<true | false>(true);
  const ExploreTab = () => <Explore />;
  const ForYouTab = () => <ForYou />;

  return (
    <GeneralLayout>
      <SafeAreaView>
        <NavBar />
        <View>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(true);
              }}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === true && styles.activeTabText,
                ]}>
                Explore
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveTab(false);
              }}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === false && styles.activeTabText,
                ]}>
                For You
              </Text>
            </TouchableOpacity>
          </View>
          {activeTab === true ? <ExploreTab /> : <ForYouTab />}
        </View>
      </SafeAreaView>
    </GeneralLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  activeTabText: {
    color: colors.textColor,
  },
  tabText: {
    fontSize: fonts.size.xxLarge,
    fontWeight: '500',
    color: colors.grey,
    lineHeight: 28,
    paddingHorizontal: metrics.defaultPadding,
  },
});
export default Events;
