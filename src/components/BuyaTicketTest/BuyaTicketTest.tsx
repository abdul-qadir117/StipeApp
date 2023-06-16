import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BuyaTicketTest.styles';
import { Icons } from '../../assets/images/svgs/index';
import { HeadingCustom } from '../../screens/Groups/components/Heading';
import PaymentButtons from '../PaymentButtons/PaymentButton';
import { useNavigation } from '@react-navigation/native';
import { useStripe } from '@stripe/stripe-react-native';

const BuyaTicketTest = (props: any) => {
  const navigation = useNavigation();
  console.log(props.route);
  const { totalPrice, totalTickets } = props.route.params;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: 'cus_O5iTVA4Bm3NAGF',
      paymentIntentClientSecret:
        'pi_3NJX3K2eZvKYlo2C0Oea6lr2_secret_KaWvHsvG9BglMiTJ9uCzUmNN5',
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'rehan',
      },
    });
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      console.log('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icons.EventItem2 />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dinner with Fairgrove Partners</Text>
          <Text style={styles.subtitle}>Music</Text>
          <Text style={styles.timings}>Web 26 Oct . 19:00</Text>
        </View>
      </View>
      <View style={styles.ticketsSummary}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.title}>Private</Text>
          <Text style={styles.title}>{totalPrice}</Text>
        </View>
        <View>
          <Text style={styles.quantity}>{totalTickets}</Text>
          <Text style={styles.subtitle}>Quantity</Text>
        </View>
      </View>
      <View>
        <HeadingCustom text={'Pay With'} />
        <PaymentButtons navigation={navigation} totalPrice={totalPrice} />
      </View>
      <TouchableOpacity
        style={[styles.checkoutButton]}
        onPress={() => {
          console.log('button clicked');
          openPaymentSheet();
        }}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyaTicketTest;
