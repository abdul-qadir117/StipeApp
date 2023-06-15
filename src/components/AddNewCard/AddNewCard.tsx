import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Input from '../Input';
import colors from '../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';

const AddNewCard = () => {
  return (
    <View style={styles.container}>
      <Input
        containerStyles={styles.inputContainer}
        label="Card Holder Name"
        inputStyles={styles.inputStyles}
        placeholder="Enter Card Holder Name"
        value={''}
        onChange={() => console.log('')}
      />
      <Input
        containerStyles={styles.inputContainer}
        label="Card Number"
        inputStyles={styles.inputStyles}
        placeholder="Enter Card Number"
        value={''}
        onChange={() => console.log('')}
      />
      <View style={styles.rowContainer}>
        <Input
          containerStyles={[styles.inputContainerHalf, styles.halfWidth]}
          label="Expiry Month"
          inputStyles={styles.inputStylesHalfWidth}
          placeholder="Month"
          value=""
          onChange={() => console.log('')}
        />
        <Input
          containerStyles={[styles.inputContainerHalf, styles.halfWidth]}
          label="Year"
          inputStyles={styles.inputStylesHalfWidth}
          placeholder="Year"
          value=""
          onChange={() => console.log('')}
        />
      </View>
      <Input
        containerStyles={styles.inputContainerHalf}
        label="Security Code"
        inputStyles={styles.inputStylesHalfWidthCvv}
        placeholder="***"
        value={''}
        onChange={() => console.log('')}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          boxType="square"
          tintColor={colors.primary}
          onCheckColor={colors.textColor}
          onFillColor={colors.primary}
          onTintColor={colors.primary}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
        <Text style={styles.checkoutButtonText}>Use as a default card</Text>
      </View>
      <View style={styles.saveCardContainer}>
        <TouchableOpacity
          style={[styles.checkoutButton]}
          onPress={() => {
            console.log('button clicked');
          }}>
          <Text style={styles.checkoutButtonText}>Save Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: metrics.smallPadding,
  },
  inputContainer: {
    marginBottom: metrics.containerPadding,
  },
  inputContainerHalf: {
    width: '100%',
  },
  inputStyles: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: metrics.containerPadding,
    fontSize: fonts.size.default,
  },
  halfWidth: {
    flex: 1,
  },
  inputStylesHalfWidth: {
    backgroundColor: colors.backgroundColor,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: metrics.containerPadding,
    fontSize: fonts.size.default,
    width: '100%',
  },
  inputStylesHalfWidthCvv: {
    backgroundColor: colors.backgroundColor,
    color: '#C2C2C2',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: metrics.containerPadding,
    fontSize: fonts.size.default,
    width: '50%',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: metrics.smallPadding,
    paddingHorizontal: metrics.defaultPadding,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.defaultPadding,
  },
  checkoutButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
  saveCardContainer: {
    marginTop: 150,
  },
});

export default AddNewCard;
