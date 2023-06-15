import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { BottomModal } from '../BottomModal/BottomModal';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';

interface TicketBarProps {
  name: string;
  price: number;
  onCountChange: (count: number, price: number) => void;
  count: number;
  isPrivate: boolean;
}

const TicketBar: React.FC<TicketBarProps> = ({
  name,
  price,
  onCountChange,
  isPrivate,
}) => {
  const [count, setCount] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
    onCountChange(count + 1, price);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1, price);
    }
  };

  const showIncrementDecrement = () => {
    setShowControls(true);
  };
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ticketName}>{name}</Text>
        <Text style={styles.price}>£{price.toFixed(2)}</Text>
        {isPrivate && (
          <TouchableOpacity onPress={handleModalOpen}>
            <Text style={styles.privateCode}>Private code required</Text>
            <BottomModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              heading="Private Code"
              info="Enter private code"
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          showControls && styles.controlsVisible,
          showControls && { backgroundColor: colors.backgroundColor },
        ]}
        onPress={showIncrementDecrement}>
        {showControls ? (
          <View
            style={[
              styles.controlsContainer,
              styles.controlsContainerBorder,
              styles.controlsContainerShadow,
            ]}>
            <TouchableOpacity
              onPress={decrementCount}
              style={styles.controlButton}>
              <Text style={[styles.controlText, { color: colors.primary }]}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              onPress={incrementCount}
              style={styles.controlButton}>
              <Text style={[styles.controlText, { color: colors.primary }]}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.addButtonText}>Add +</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.smallPadding,
    paddingVertical: 15,
    justifyContent: 'space-between',
    marginBottom: metrics.smallPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSeconday,
  },
  ticketName: {
    color: 'white',
    marginRight: metrics.smallPadding,
  },
  price: {
    color: colors.textColor,
    marginTop: 5,
  },
  privateCode: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: metrics.smallPadding,
    paddingVertical: 5,
    width: 60,
  },
  controlsVisible: {
    paddingHorizontal: 0,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  controlsContainerBorder: {
    borderWidth: 1,
    borderColor: '#BC61F5',
    borderRadius: 8,
  },
  controlsContainerShadow: {
    shadowColor: '#0F0F0F',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  controlButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  controlText: {
    fontSize: 16,
  },
  count: {
    color: colors.textColor,
    marginHorizontal: 8,
  },
  addButtonText: {
    color: colors.textColor,
    fontSize: fonts.size.medium,
  },
});

export default TicketBar;
