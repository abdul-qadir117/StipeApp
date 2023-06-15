import { ScrollView } from 'react-native';
import React from 'react';
import EventCard from '../EventCard/EventCard';
import PillLikeFilters from '../PillLikeFilters/PillLikeFilters';
import { dummyEventData } from '../../dummydata';
const ForYou = () => {
  return (
    <ScrollView>
      <PillLikeFilters />
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
    </ScrollView>
  );
};

export default ForYou;
