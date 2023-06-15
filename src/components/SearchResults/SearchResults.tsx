import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryPicker from '../CategorySelector';
import EventCard from '../EventCard/EventCard';
import { dummyEventData } from '../../dummydata';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

const SearchResults = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> 12 Results</Text>
      <ScrollView horizontal>
        <CategoryPicker
          categories={['Fashion', 'Sport', 'Drama', 'Future', 'Art & Music']}
        />
      </ScrollView>
      {dummyEventData.test2.map(item => {
        return (
          <EventCard
            data={item}
            showBorder={false}
            showAvatar={true}
            showFavIcon={false}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.backgroundColor,
  },

  title: {
    fontSize: fonts.size.xxLarge,
    fontWeight: '700',
    color: colors.textColor,
    lineHeight: 29,
    marginLeft: metrics.smallMargin,
  },
});

export default SearchResults;
