import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './eventsAndForums.styles';
import { Icons } from '../../../assets/images/svgs/index';

const EventsAndFroums = ({ isPrivate }: { isPrivate: boolean }) => {
  const [selectedTab, setSelectedTab] = useState('Events');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Events');
          }}
          style={
            selectedTab === 'Events' ? styles.selectedTab : styles.unSelectedTab
          }>
          <Text
            style={
              selectedTab === 'Events'
                ? styles.selectedTabText
                : styles.unselectedTabText
            }>
            Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Forums');
          }}
          style={
            selectedTab === 'Forums' ? styles.selectedTab : styles.unSelectedTab
          }>
          <Text
            style={
              selectedTab === 'Forums'
                ? styles.selectedTabText
                : styles.unselectedTabText
            }>
            Forums
          </Text>
        </TouchableOpacity>
      </View>
      {isPrivate ? (
        <View style={styles.privateGroup}>
          <Icons.PriaveGroup />
        </View>
      ) : (
        <>
          {selectedTab === 'Events' && (
            <View style={styles.eventsBody}>
              <View style={styles.bottomItem}>
                <View style={styles.roleTitleContainer}>
                  <Text style={styles.roletitle}>
                    Musical Medicine x De La Disco
                  </Text>
                  <Text style={styles.rolesubtitle}>Web 26 Oct</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Icons.EventsItem />
                </View>
              </View>
            </View>
          )}
          {selectedTab === 'Forums' && (
            <View style={styles.eventsBody}>
              <View style={styles.bottomItem}>
                <View style={styles.roleTitleContainer}>
                  <Text style={styles.roletitle}>
                    Musical Medicine x De La Disco
                  </Text>
                  <Text style={styles.rolesubtitle}>Web 26 Oct</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Icons.EventsItem />
                </View>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default EventsAndFroums;
