import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BuyaTicketTest.styles';
import { Icons } from '../../assets/images/svgs/index';
import { HeadingCustom } from '../../screens/Groups/components/Heading';
import PaymentButtons from '../PaymentButtons/PaymentButton';
import { useNavigation } from '@react-navigation/native';

const BuyaTicketTest = () => {
  const navigation = useNavigation();

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
          <Text style={styles.title}>25.00</Text>
        </View>
        <View>
          <Text style={styles.quantity}>01</Text>
          <Text style={styles.subtitle}>Quantity</Text>
        </View>
      </View>
      <View>
        <HeadingCustom text={'Pay With'} />
        <PaymentButtons navigation={navigation} />
      </View>
      <TouchableOpacity
        style={[styles.checkoutButton]}
        onPress={() => {
          console.log('button clicked');
        }}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyaTicketTest;
