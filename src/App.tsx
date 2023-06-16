import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import Toast from 'react-native-toast-message';
import fonts from './utils/fonts';
import { StatusBar, StyleSheet } from 'react-native';
import colors from './utils/colors';
import { StripeProvider } from '@stripe/stripe-react-native';

// <StripeProvider publishableKey="pk_test_qblFNYngBkEdjEZ16jxxoWSM">
{
  /* <StripeProvider publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx"> */
}

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51Hc7A3CtcrhGM8ReLG3Sh91R91YgFTcD8b2iyC0kDX2ceMEYTesZ0uIsDvVfTg5KA4YciCcmjDZs7cI9IRnLu2Mj00amBH4X4s">
      <GestureHandlerRootView style={styles.container}>
        <StatusBar barStyle={'light-content'} animated={true} />
        <Provider store={store}>
          <MainNavigation />
          <Toast />
        </Provider>
      </GestureHandlerRootView>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    ...fonts.style.root,
  },
  safeAreaContainer: {
    flexGrow: 1,
  },
});

export default App;
