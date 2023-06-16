import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BuyaTicket.style';
import { Icons } from '../../assets/images/svgs/index';
import Input from '../Input';
import TicketBar from '../SingleTIcketBar/SingleTicketBar';

const ticketData = [
  { name: 'Ticket Name', price: 25.2, isPrivate: true },
  { name: 'Ticket Name', price: 25, isPrivate: false },
  { name: 'Ticket Name', price: 10, isPrivate: false },
  { name: 'Ticket Name', price: 50, isPrivate: false },
];

const BuyaTicket = ({ navigation }: any) => {
  const [ticketCounts, setTicketCounts] = useState<number[]>([]);
  const [selectedTicketCount, setSelectedTicketCount] = useState(0);
  const totalPrice = ticketCounts.reduce(
    (total, count, index) => total + count * ticketData[index].price,
    0,
  );
  const totalTickets = ticketCounts.reduce((total, count) => total + count, 0);
  const isCheckoutEnabled = selectedTicketCount > 0;
  const handleCountChange = (index: number, count: number) => {
    const newTicketCounts = [...ticketCounts];
    newTicketCounts[index] = count;
    setTicketCounts(newTicketCounts);
    setSelectedTicketCount(count);
  };
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
      <View style={styles.promoInput}>
        <Input
          value={''}
          label="Promo Code"
          placeholder="Add a promo code"
          onChange={() => console.log('')}
          inputStyles={styles.input}
          error={''}
        />
      </View>
      <View style={styles.ticketBar}>
        {ticketData.map((ticket, index) => (
          <TicketBar
            key={index}
            name={ticket.name}
            price={ticket.price}
            count={ticketCounts[index]}
            isPrivate={ticket.isPrivate}
            onCountChange={count => handleCountChange(index, count)}
          />
        ))}
      </View>
      <View style={styles.totalContainer}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.subtitle}>${totalPrice.toFixed(2)}</Text>
          <Text style={styles.subtitle}>{totalTickets} Tickets</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.checkoutButton,
            !isCheckoutEnabled && styles.disabledButton,
          ]}
          disabled={!isCheckoutEnabled}
          onPress={() => {
            navigation.navigate('BuyaTicketTest', {
              totalPrice: totalPrice.toFixed(2),
              totalTickets: totalTickets,
            });
          }}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyaTicket;
