import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from './EventDetails.styles';
import { Icons } from '../../assets/images/svgs';
import colors from '../../utils/colors';
const EventDetailss = ({ navigation }: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Free Street Art Walking Tour</Text>
        <View style={styles.Subwrapper}>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Tickets Sold</Text>
            <Text style={styles.descriptionBold}>30</Text>
          </View>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Tickets Remaining</Text>
            <Text style={styles.descriptionBold}>23</Text>
          </View>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Current Revenue</Text>
            <Text style={styles.descriptionBold}>£ 1300</Text>
          </View>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Total Possible Revenue</Text>
            <Text style={styles.descriptionBold}>£ 1600</Text>
          </View>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Break Even</Text>
            <Text style={styles.descriptionBold}>£ 1200</Text>
          </View>
        </View>
        <View style={styles.singleRow}>
          <Text style={styles.description}>Profit</Text>
          <Text style={styles.subtitle}>£ 400</Text>
        </View>
        <View style={styles.singleRow}>
          <TouchableOpacity
            style={[styles.outlinedButton]}
            onPress={() => {
              console.log('button clicked');
            }}>
            <Text style={styles.checkoutButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filledButton}
            onPress={() => {
              navigation.navigate('EventAtendee');
            }}>
            <Text style={styles.checkoutButtonText}>View Attendees</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}> Send a message to your Attendees</Text>
        <View style={styles.Subwrapper1}>
          <TextInput
            style={styles.input}
            onChangeText={() => console.log('')}
            placeholder="Enter your message here"
            keyboardType="numeric"
            placeholderTextColor={colors.placeholder}
          />
        </View>
        <TouchableOpacity
          style={[styles.checkoutButton]}
          onPress={() => {
            console.log('button clicked');
          }}>
          <Text style={styles.checkoutButtonText}>
            Send Notification + Email to Attendees
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.placeCenter}>
        <Text style={styles.canelEvent}> Cancel Event</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={showModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
            <View style={styles.bottomSheetButtonContainer}>
              <Icons.AddEvent height={99} width={99} />
              <Text style={styles.modalMessage}>
                Are you sure you want to cancel your event?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButtonYes}
                  onPress={() => setShowModal(false)}>
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

export default EventDetailss;
