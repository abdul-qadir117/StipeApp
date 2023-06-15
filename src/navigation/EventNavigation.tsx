import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import Events from '../screens/Events';
import EventAtendee from '../components/EventAtendee/EventAtendee';
import EventDetails from '../components/EventDetails/EventDetails';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import Wishlist from '../components/Wishlist/Wishlist';
const Stack = createNativeStackNavigator();

const EventsNavigation = () => {
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
    <Stack.Navigator initialRouteName="EventsMain">
      <Stack.Screen
        name="EventsMain"
        options={{
          headerShown: false,
        }}
        component={Events}
      />
      <Stack.Screen
        name="Wishlist"
        options={{
          title: 'Wishlist',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
          headerShown: true,
        }}
        component={Wishlist}
      />
      <Stack.Screen
        name="EventSearch"
        options={{
          title: 'Event Search',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={SearchScreen}
      />
      <Stack.Screen
        name="EventSearchPreview"
        options={{
          title: 'Event Search Preview',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
        component={SearchResults}
      />
      <Stack.Screen
        name="EventDetails"
        options={{
          title: 'Event',
          ...defailtHeaderOptions,
          headerBackTitleVisible: false,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
          headerShown: true,
        }}
        component={EventDetails}
      />
      <Stack.Screen
        name="EventAtendee"
        options={{
          title: 'Event',
          ...defailtHeaderOptions,
          headerBackTitleVisible: false,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
          headerShown: true,
        }}
        component={EventAtendee}
      />
    </Stack.Navigator>
  );
};

export default EventsNavigation;
