import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';
interface PaymentButtonsProps {
  navigation: any;
}
const PaymentButtons: React.FC<PaymentButtonsProps> = ({ navigation }) => {
  const handleAddCard = () => {
    navigation.navigate('AddNewCard');
  };

  const handleGooglePay = () => {
    navigation.navigate('ViewSavedCards');
  };

  const handleApplePay = () => {
    console.log('Apple card clicked');
  };

  const Prices = {
    ticketPrice: '£25.00',
    bookingFee: '£10.00',
    total: '£35.00',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAddCard}>
        <Icons.CreditIcon width={35} height={35} />
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGooglePay}>
        <Icons.GpayIcon width={40} height={40} />
        <Text style={styles.buttonText}>Google Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleApplePay}>
        <Icons.ApplePayIcon width={40} height={40} />
        <Text style={styles.buttonText}>Apple Pay</Text>
      </TouchableOpacity>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Ticket</Text>
          <Text style={styles.summaryValue}>{Prices.ticketPrice}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Booking Fee</Text>
          <Text style={styles.summaryValue}>{Prices.bookingFee}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryValue}>{Prices.total}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 16,
    backgroundColor: 'transparent',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    marginBottom: metrics.smallPadding,
    paddingVertical: 7,
  },
  buttonText: {
    color: colors.textColor,
    marginLeft: metrics.smallPadding,
    fontSize: fonts.size.default,
  },
  summaryContainer: {
    marginTop: 16,
    paddingHorizontal: metrics.smallPadding,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: fonts.size.default,
    color: colors.textColor,
  },
  summaryValue: {
    fontSize: fonts.size.default,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  separator: {
    borderWidth: 1,
    marginVertical: 15,
    borderStyle: 'dashed',
    borderColor: colors.borderColor,
    width: '100%',
  },
});

export default PaymentButtons;
