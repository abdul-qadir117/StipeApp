import React, { useState } from 'react';
import {
  CardField,
  CardFieldInput,
  // useStripe,
} from '@stripe/stripe-react-native';
import { StyleSheet } from 'react-native';

const AddCardScreen = () => {
  const [card, setCard] = useState<CardFieldInput.Details>();
  return (
    <CardField
      postalCodeEnabled={true}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={styles.cardStyle}
      style={styles.container}
      onCardChange={cardDetails => {
        setCard(cardDetails);
      }}
      onFocus={focusedField => {
        console.log('focusField', focusedField);
      }}
    />
  );
};

export default AddCardScreen;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginVertical: 30,
  },
  cardStyle: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
});
