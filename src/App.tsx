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

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_qblFNYngBkEdjEZ16jxxoWSM">
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
