import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../../assets/images/svgs';
import moment from 'moment';
import { useAppDispatch } from '../../../hooks/redux';
import { setTicketPayload } from '../events.slice';

const CustomLabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <View>
      <Text style={styles.ticketInfoLabel}>{label}</Text>
      <Text style={styles.ticketInfoValue}>{value ?? '-'}</Text>
    </View>
  );
};

const Ticket = ({ ticket, isPreview = false }: any) => {
  const dispatch = useAppDispatch();
  const getReleaseDate = () => {
    return ticket?.release_date
      ? moment(new Date(ticket?.release_date)).format('DD MMM YY')
      : '-';
  };

  const onEditTicket = () => {
    if (ticket?.id && ticket?.id > 0) {
      dispatch(setTicketPayload(ticket));
    }
  };

  return (
    <View style={styles.ticketContainer}>
      <View style={styles.ticketHeaderContainer}>
        <Text style={styles.tiketName}>
          {ticket?.ticket_name}{' '}
          <View style={styles.ticketType}>
            <Text style={styles.ticketTypeText}>
              {ticket?.private_code === '' ? 'Public' : 'Private'}
            </Text>
          </View>
        </Text>
        {!isPreview && (
          <View style={styles.ticketActionContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.deleteBtn}>
              <Icons.Delete />
            </TouchableOpacity>
            <TouchableOpacity onPress={onEditTicket}>
              <Icons.Edit />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.ticketHeaderContainer}>
        <View style={styles.circle} />
        <View style={styles.divider} />
        <View style={styles.circleRight} />
      </View>

      <View style={styles.ticketInfoContainer}>
        <CustomLabelValue label="Release date" value={getReleaseDate()} />
        <View style={styles.partition} />
        <CustomLabelValue
          label="Price"
          value={
            ticket?.ticket_price === 0
              ? 'Free'
              : `£${parseInt(ticket?.ticket_price, 10)?.toFixed(2)}`
          }
        />
        <View style={styles.partition} />
        <CustomLabelValue label="Quantity" value={ticket?.total_qty} />
      </View>
      <View style={styles.ticketInfoContainer}>
        <CustomLabelValue
          label="Private Code"
          value={ticket?.private_code ? ticket?.private_code : '-'}
        />
        {ticket?.ticketType === 'paid' && (
          <>
            <View style={styles.partition} />
            <CustomLabelValue
              label="Discount code"
              value={ticket?.discount_code ? ticket?.discount_code : '-'}
            />
            <View style={styles.partition} />
            <CustomLabelValue
              label="Discount"
              value={
                ticket?.discount_rate ? `${ticket?.discount_rate}% off` : '-'
              }
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Ticket;
