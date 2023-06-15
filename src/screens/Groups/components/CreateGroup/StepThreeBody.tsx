import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OutlinedButtonWithIcon from '../../../../components/Button/OutlinedButtonWithIcon';
import { Icons } from '../../../../assets/images/svgs';
import { StripeProvider } from '@stripe/stripe-react-native';
import { PUBLISH_KEY } from '@env';

export const StepThreeBody = ({
  setGroupType,
  setIsRemoveCardModelOpen,
}: any) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.stepOneContainer}>
      <Text style={styles.stepThreeHeading}>
        Connect your bank account for ticket sales (membership fees coming soon)
      </Text>
      <StripeProvider publishableKey={PUBLISH_KEY}>
        <OutlinedButtonWithIcon
          type="primary"
          title="Add Bank Details"
          IconBtnTitleStyles={styles.textButtonSelected}
          customStyle={styles.buttonSelected}
          Icon={Icons.StripeIcon}
          onPress={() => {
            setGroupType('public');
          }}
        />
      </StripeProvider>
      {/* <View style={styles.bankAddedContainer}>
        <View style={styles.crossIconContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsRemoveCardModelOpen(true);
            }}>
            <Icons.Remove width={30} height={30} style={styles.removeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.bankAddedInnerContainer}>
          <View style={styles.bankIconContainer}>
            <Icons.BankIcon />
          </View>
          <View>
            <Text style={styles.bankName}>Bank of UK</Text>
            <Text style={styles.accountNumber}>AC NO: **** **** **** 1452</Text>
          </View>
        </View>
      </View> */}
    </KeyboardAwareScrollView>
  );
};
