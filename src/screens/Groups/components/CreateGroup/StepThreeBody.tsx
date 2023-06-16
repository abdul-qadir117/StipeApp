import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OutlinedButtonWithIcon from '../../../../components/Button/OutlinedButtonWithIcon';
import { Icons } from '../../../../assets/images/svgs';
import {
  collectBankAccountForSetup,
  SetupIntent,
  confirmSetupIntent,
  verifyMicrodepositsForSetup,
  collectBankAccountToken,
  useStripe,
} from '@stripe/stripe-react-native';
import { PUBLISH_KEY } from '@env';

export const StepThreeBody = ({
  setGroupType,
  setIsRemoveCardModelOpen,
}: any) => {
  const { createToken } = useStripe();

  const handleCollectBankAccountPress = async () => {
    const { setupIntent, error } = await collectBankAccountForSetup(
      'seti_1NJMQV2eZvKYlo2Cafb3ASjR_secret_O5XVLHCK1m2qWPz2tzHLRTK6K7uXfep',
      {
        paymentMethodType: 'USBankAccount',
        paymentMethodData: {
          billingDetails: {
            name: 'rehan',
            email: undefined,
          },
        },
      },
    );

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else if (setupIntent) {
      console.log('Setup status:', setupIntent.status);
      if (setupIntent.status === SetupIntent.Status.RequiresConfirmation) {
        await handlePayPress(setupIntent.clientSecret);
      } else if (setupIntent.status === SetupIntent.Status.RequiresAction) {
        // The next step is to call `verifyMicrodepositsForSetup`
      }
    }
  };

  const handlePayPress = async (clientSecret: string) => {
    const { error, setupIntent } = await confirmSetupIntent(clientSecret, {
      paymentMethodType: 'USBankAccount',
    });

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else if (setupIntent) {
      if (setupIntent.status === SetupIntent.Status.Processing) {
      } else if (
        setupIntent.status === SetupIntent.Status.RequiresAction &&
        setupIntent?.nextAction?.type === 'verifyWithMicrodeposits'
      ) {
        await verifyPayment(setupIntent.clientSecret);
      } else {
        console.log('Payment status:', setupIntent.status);
      }
    }
  };

  const verifyPayment = async (clientSecret: string) => {
    const { error, setupIntent } = await verifyMicrodepositsForSetup(
      clientSecret,
      {
        descriptorCode: 'SM11AA',
      },
    );

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else if (setupIntent) {
      console.log('Payment status:', setupIntent.status);
    }
  };

  const handleAddBankAccount = async () => {
    const token = await createToken({
      type: 'BankAccount',
      accountNumber: '000123456789',
      routingNumber: '110000000', // Routing number is REQUIRED for US bank accounts
      country: 'US',
      currency: 'usd',
      accountHolderName: 'rehan',
      accountHolderType: 'Individual',
    });

    console.log(token);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.stepOneContainer}>
      <Text style={styles.stepThreeHeading}>
        Connect your bank account for ticket sales (membership fees coming soon)
      </Text>

      <OutlinedButtonWithIcon
        type="primary"
        title="Add Bank Details"
        IconBtnTitleStyles={styles.textButtonSelected}
        customStyle={styles.buttonSelected}
        Icon={Icons.StripeIcon}
        onPress={() => {
          setGroupType('public');
          // handleCollectBankAccountPress();
          handleAddBankAccount();
        }}
      />

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
