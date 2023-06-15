import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/Auth/Login';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import OTP from '../screens/Auth/OTP';
import ChoosePassword from '../screens/Auth/ForgotPassword/ChoosePassword';
import PhoneScreen from '../screens/Auth/Signup/PhoneScreen';
import PersonalDetails from '../screens/Auth/Signup/PersonalDetails';
import UniversitySelection from '../screens/Auth/Signup/UniversitySelection';
import YourIntrest from '../screens/Auth/Signup/YourIntrest';
import TermsAndCondition from '../screens/Auth/Signup/TermAndCondition';
import PersonalInfo from '../screens/Auth/Signup/PersonalInfo';
import CategorySelection from '../screens/Auth/Signup/SelectCategory';
import PrivacyQuestion from '../screens/Auth/Signup/Privacy';
import Wellcome from '../screens/Auth/Signup/WellcomeNote';

const Stack = createNativeStackNavigator();

const defailtHeaderOptions: {
  headerStyle: object;
  headerTitleStyle: object;
} = {
  headerStyle: {
    backgroundColor: colors.darkGrey,
    borderBttomWidth: 2,
    borderBottomColor: 'red',
  },
  headerTitleStyle: {
    ...fonts.style.heading,
  },
};
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="signup/phone"
        component={PhoneScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/interest"
        component={YourIntrest}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/university/selection"
        component={UniversitySelection}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="personalDetails"
        component={PersonalDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/personalInfo"
        component={PersonalInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/wellcome"
        component={Wellcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/category"
        component={CategorySelection}
        options={{
          title: 'I am',
          ...defailtHeaderOptions,
          headerBackTitleVisible: false,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="signup/privacy"
        component={PrivacyQuestion}
        options={{
          title: 'Privacy',
          ...defailtHeaderOptions,
          headerBackTitleVisible: false,
          headerTintColor: colors.textColor,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="login"
        component={LogIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="otp"
        component={OTP}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="signup/termsAndCondition"
        component={TermsAndCondition}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="choosePassword"
        component={ChoosePassword}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default Auth;
