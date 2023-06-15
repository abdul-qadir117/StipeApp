import React, { useState } from 'react';
import Option from '../../../components/Option';
import { useAppDispatch } from '../../../hooks/redux';
import EventLayout from '../components/EventLayout';
import eventsStyles from '../events.styles';
import { Icons } from '../../../assets/images/svgs';
import { Text } from 'react-native';
import { setTicketType } from '../events.slice';

const TicketStep1 = () => {
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <EventLayout
      btnTitle={'Next'}
      onBtnPress={() => {
        dispatch(setTicketType(isPaid ? 'paid' : 'free'));
      }}>
      <Text style={eventsStyles.chooseTicket}>Choose ticket type</Text>

      <Option
        title="Paid"
        Icon={Icons.TicketFree}
        onPress={() => setIsPaid(true)}
        isSelected={isPaid}
        customContainer={eventsStyles.ticketOption}
        type="icon"
      />
      <Option
        title="Free"
        onPress={() => setIsPaid(false)}
        isSelected={!isPaid}
        customContainer={eventsStyles.ticketOption}
        Icon={Icons.TicketPaid}
        type="icon"
      />
    </EventLayout>
  );
};

export default TicketStep1;
