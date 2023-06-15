import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import colors from '../../utils/colors';
import { Icons } from '../../assets/images/svgs';
import CheckBox from '@react-native-community/checkbox';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';

const SavedCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCardSelection = (cardNumber: string) => {
    setSelectedCard(cardNumber);
  };

  const isCardSelected = (cardNumber: string) => {
    return selectedCard === cardNumber;
  };

  const handleDeleteCard = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.cardHeader}>
          <View style={styles.iconWrapper}>
            <Icons.MasterCard width={40} height={40} />
          </View>
          <View style={styles.checkboxWrapper}>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Icons.Trash width={24} height={24} />
            </TouchableOpacity>
            <CheckBox
              boxType="circle"
              tintColor={colors.textColor}
              onCheckColor={colors.primary}
              onFillColor={colors.textColor}
              onTintColor={colors.transparent}
              style={styles.checkbox}
              value={isCardSelected('2564 8546 8421 1121')}
              onValueChange={() => handleCardSelection('2564 8546 8421 1121')}
            />
          </View>
        </View>
        <Text style={styles.cardNumber}>2564 8546 8421 1121</Text>
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardHolder}>Card Holder</Text>
            <Text style={styles.cardHolderName}>Tommy Jason</Text>
          </View>
          <View>
            <Text style={styles.cardHolder}>Expires</Text>
            <Text style={styles.cardHolderName}>13/24</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardWrapper}>
        <View style={styles.cardHeader}>
          <View style={styles.iconWrapper}>
            <Icons.MasterCard width={40} height={40} />
          </View>
          <View style={styles.checkboxWrapper}>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Icons.Trash width={24} height={24} />
            </TouchableOpacity>
            <CheckBox
              boxType="circle"
              tintColor={colors.textColor}
              onCheckColor={colors.primary}
              onFillColor={colors.textColor}
              onTintColor={colors.transparent}
              style={styles.checkbox}
              value={isCardSelected('2564 8546 8421 1122')}
              onValueChange={() => handleCardSelection('2564 8546 8421 1122')}
            />
          </View>
        </View>
        <Text style={styles.cardNumber}>2564 8546 8421 1122</Text>
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardHolder}>Card Holder</Text>
            <Text style={styles.cardHolderName}>Tommy Jason</Text>
          </View>
          <View>
            <Text style={styles.cardHolder}>Expires</Text>
            <Text style={styles.cardHolderName}>13/24</Text>
          </View>
        </View>
      </View>
      <Modal animationType="slide" visible={showModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
            <View style={styles.bottomSheetButtonContainer}>
              <Icons.Remove height={99} width={99} />
              <Text style={styles.modalMessage}>
                Are you sure you want to delete the card?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButtonYes}
                  onPress={handleDeleteCard}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButtonNo}
                  onPress={() => setShowModal(false)}>
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  cardWrapper: {
    backgroundColor: colors.primary,
    marginHorizontal: metrics.smallPadding,
    paddingHorizontal: metrics.smallPadding,
    borderRadius: 16,
    height: 190,
    marginBottom: metrics.smallPadding,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: metrics.smallPadding,
    marginTop: metrics.defaultPadding,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  checkbox: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginRight: metrics.smallPadding,
  },

  cardNumber: {
    color: colors.textColor,
    fontSize: fonts.size.large,
    fontWeight: 'bold',
    marginTop: metrics.smallPadding,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.defaultPadding,
  },
  cardHolder: {
    color: colors.textColor,
    fontSize: fonts.size.small,
    opacity: 0.6,
    marginBottom: 3,
  },
  cardHolderName: {
    color: 'white',
    fontSize: fonts.size.medium,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    height: 300,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.containerPadding,
  },
  bottomSheetButtonContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.smallPadding,
  },
  modalMessage: {
    fontSize: fonts.size.default,
    color: colors.textColor,
    marginVertical: metrics.defaultPadding,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButtonYes: {
    marginLeft: metrics.smallPadding,
    backgroundColor: colors.primary,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonNo: {
    marginLeft: metrics.smallPadding,
    backgroundColor: colors.darkGrey,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    borderColor: colors.textColor,
    borderWidth: 1,
    justifyContent: 'center',
  },
  modalButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
  },
});

export default SavedCards;
