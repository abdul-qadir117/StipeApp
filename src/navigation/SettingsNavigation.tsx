/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import Account from '../screens/Settings/Account';
import ChangeEmail from '../screens/Settings/ChangeEmail';
import ChangePhoneNumber from '../screens/Settings/ChangeNumber';
import ChangePassword from '../screens/Settings/ChangePassword';
import ChangeGraduationYear from '../screens/Settings/ChangeGraduationYear';
import ChangeCollege from '../screens/Settings/ChangeCollege';
import ChangeUniversity from '../screens/Settings/ChangeUniversity';
import ChangeDateOfBirth from '../screens/Settings/ChangeDateOfBirth';
import ChangePrefPronoun from '../screens/Settings/ChangePronous';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import ChangeName from '../screens/Settings/ChangeName';
import ChangeInterest from '../screens/Settings/ChangeInterests';
import NotificationSettings from '../screens/Settings/NotificationSettings';
import GroupSettings from '../screens/Settings/GroupSettings';
import EventsSettings from '../screens/Settings/EventsSettings';
import TermsAndConditionsAndPrivacy from '../screens/Settings/TermsAndConditions';
import AcceptTermsAndCondition from '../screens/Settings/AcceptTAndCs';
import AcceptPrivacy from '../screens/Settings/AcceptPrivacy';
import Help from '../screens/Settings/Help';
import Wishlist from '../components/Wishlist/Wishlist';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import SearchResults from '../components/SearchResults/SearchResults';
import EventAtendee from '../components/EventAtendee/EventAtendee';
import EventDetails from '../components/EventDetails/EventDetails';

const Stack = createNativeStackNavigator();

const SettingsNavigation = () => {
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
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="changePronoun"
        options={{
          title: 'Prefered Pronoun',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangePrefPronoun}
      />
      <Stack.Screen
        name="changeEmail"
        options={{
          title: 'Email',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeEmail}
      />
      <Stack.Screen
        name="changePhoneNumber"
        options={{
          title: 'Phone Number',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangePhoneNumber}
      />
      <Stack.Screen
        name="changePassword"
        options={{
          title: 'Password',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangePassword}
      />
      <Stack.Screen
        name="changeGraduationYear"
        options={{
          title: 'Graduation Year',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeGraduationYear}
      />
      <Stack.Screen
        name="changeCollege"
        options={{
          title: 'College',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeCollege}
      />
      <Stack.Screen
        name="changeUniversity"
        options={{
          title: 'University',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeUniversity}
      />
      <Stack.Screen
        name="changeDateOfBirth"
        options={{
          title: 'Date of Birth',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeDateOfBirth}
      />
      <Stack.Screen
        name="changeName"
        options={{
          title: 'Name',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeName}
      />
      <Stack.Screen
        name="changeInterests"
        options={{
          title: 'Your Interests',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={ChangeInterest}
      />
      <Stack.Screen
        name="notificationSettings"
        options={{
          title: 'Notifications',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={NotificationSettings}
      />
      <Stack.Screen
        name="groupSettings"
        options={{
          title: 'Notifications',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={GroupSettings}
      />
      <Stack.Screen
        name="eventsSettings"
        options={{
          title: 'Notifications',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={EventsSettings}
      />
      <Stack.Screen
        name="TAndPSettings"
        options={{
          title: 'Terms & Conditions',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={TermsAndConditionsAndPrivacy}
      />
      <Stack.Screen
        name="AcceptTAndCs"
        options={{
          title: 'Terms & Conditions',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={AcceptTermsAndCondition}
      />
      <Stack.Screen
        name="AcceptPrivacy"
        options={{
          title: 'Privacy Policy',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={AcceptPrivacy}
      />
      <Stack.Screen
        name="Help"
        options={{
          title: 'Help',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={Help}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
