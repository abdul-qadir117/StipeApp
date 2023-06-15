import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import Groups from '../screens/Groups';
import { ViewGroup } from '../screens/Groups/View';
import CreateEvent from '../screens/Events/Create';
import { EventProvider } from '../lib/context/EventEditContext';
import Event from '../screens/Events/View';
const Stack = createNativeStackNavigator();

const GroupNavigation = () => {
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

  const EventCreation = ({ route }: any) => {
    return (
      <EventProvider>
        <CreateEvent route={route} />
      </EventProvider>
    );
  };

  return (
    <Stack.Navigator initialRouteName="GroupsMain">
      <Stack.Screen
        name="GroupsMain"
        component={Groups}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GroupDetail"
        component={ViewGroup}
        options={{
          title: '',
          headerBackTitleVisible: false,
          ...defailtHeaderOptions,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={EventCreation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={Event}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default GroupNavigation;
