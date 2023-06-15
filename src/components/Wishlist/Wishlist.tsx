import React from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
import EventCard from '../EventCard/EventCard';
import { dummyEventData } from '../../dummydata';
const Wishlist = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {dummyEventData.test1.map(item => {
          return (
            <EventCard
              data={item}
              showBorder={true}
              showAvatar={true}
              showFavIcon={true}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: metrics.containerPadding,
    paddingTop: metrics.smallPadding,
  },
});
export default Wishlist;
