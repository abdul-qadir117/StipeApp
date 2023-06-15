import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Auth from './AuthNavigation';
import Splash from '../screens/Splash';
import Settings from './SettingsNavigation';
import SocialLinks from '../components/ProfileSocial/socialLinks';
import colors from '../utils/colors';
import { Icons } from '../assets/images/svgs';
import { StyleSheet, View } from 'react-native';
import Groups from '../screens/Groups';
import fonts from '../utils/fonts';
import CreateGroup from '../screens/Groups/components/CreateGroup';
import AccepGrouptTermsAndCondition from '../screens/Groups/components/CreateGroup/AcceptTAndCs';
import AcceptGroupPrivacy from '../screens/Groups/components/CreateGroup/AcceptPrivacy';
import GroupNavigation from './GroupNavigation';
import EventsNavigation from './EventNavigation';
import CreateEvent from '../screens/Events/Create';
import BuyaTicket from '../components/BuyaTicket/BuyaTicket';
import BuyaTicketTest from '../components/BuyaTicketTest/BuyaTicketTest';
import AddNewCard from '../components/AddNewCard/AddNewCard';
import SavedCards from '../components/SavedCards/SavedCards';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.textColor,
        tabBarStyle: {
          paddingTop: 5,
          backgroundColor: colors.backgroundColor,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={EventsNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: any) => {
            return (
              <View style={styles.tabIcon}>
                {focused ? <Icons.LocationSelected /> : <Icons.LocationGrey />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: any) => {
            return (
              <View style={styles.tabIcon}>
                {focused ? <Icons.GroupsSelected /> : <Icons.GroupsGrey />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={Groups}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: any) => {
            return (
              <View style={styles.tabIcon}>
                {focused ? <Icons.AddSelected /> : <Icons.AddGrey />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }: any) => {
            return (
              <View style={styles.tabIcon}>
                {focused ? (
                  <Icons.CommunitySelected />
                ) : (
                  <Icons.CommunityGrey />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: any) => {
            return (
              <View style={styles.tabIcon}>
                {focused ? <Icons.ProfileSelected /> : <Icons.ProfileGrey />}
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  const defailtHeaderOptions: {
    headerStyle: object;
    headerTitleStyle: object;
  } = {
    headerStyle: {
      backgroundColor: colors.backgroundColor,
    },
    headerTitleStyle: {
      ...fonts.style.heading,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        <Stack.Screen
          name="SocialLinks"
          options={{ headerShown: false }}
          component={SocialLinks}
        />
        <Stack.Screen
          name="AuthBase"
          options={{ headerShown: false }}
          component={Auth}
        />
        <Stack.Screen
          name="CreateGroup"
          options={{ headerShown: false }}
          component={CreateGroup}
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GroupTerms"
          options={{
            title: 'Terms & Conditions',
            headerBackTitleVisible: false,
            ...defailtHeaderOptions,
            headerTintColor: colors.textColor,
            headerTitleAlign: 'center',
          }}
          component={AccepGrouptTermsAndCondition}
        />
        <Stack.Screen
          name="CheckOut"
          options={{
            title: 'Check Out',
            ...defailtHeaderOptions,
            headerBackTitleVisible: false,
            headerTintColor: colors.textColor,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
          component={BuyaTicket}
        />
        <Stack.Screen
          name="BuyaTicketTest"
          options={{
            title: 'Check Out',
            ...defailtHeaderOptions,
            headerBackTitleVisible: false,
            headerTintColor: colors.textColor,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
          component={BuyaTicketTest}
        />
        <Stack.Screen
          name="AddNewCard"
          options={{
            title: 'Add New Card',
            ...defailtHeaderOptions,
            headerBackTitleVisible: false,
            headerTintColor: colors.textColor,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
          component={AddNewCard}
        />
        <Stack.Screen
          name="ViewSavedCards"
          options={{
            title: 'View Saved Cards',
            ...defailtHeaderOptions,
            headerBackTitleVisible: false,
            headerTintColor: colors.textColor,
            headerTitleAlign: 'center',
            headerShown: true,
          }}
          component={SavedCards}
        />
        <Stack.Screen
          name="GroupPrivacy"
          options={{
            title: 'Privacy Policy',
            headerBackTitleVisible: false,
            ...defailtHeaderOptions,
            headerTintColor: colors.textColor,
            headerTitleAlign: 'center',
          }}
          component={AcceptGroupPrivacy}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
const styles = StyleSheet.create({
  tabIcon: {},
});
