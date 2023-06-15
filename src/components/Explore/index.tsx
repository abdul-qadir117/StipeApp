import React, { useState } from 'react';
import EventCard, { EventType } from '../EventCard/EventCard';
import FilterComponent from '../Filters/FiltersComponent';
import { useGetEventsQuery } from '../../services/modules/event.api';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

const Explore = () => {
  const [filter, setFilter] = useState<string>('');
  const query = filter === '' ? '' : `?category_id=${filter}`;
  const { data: EventsData, isFetching, refetch } = useGetEventsQuery(query);

  const renderItem = ({ item }: { item: EventType }) => {
    return (
      <EventCard
        data={item}
        showBorder={true}
        showAvatar={true}
        showFavIcon={true}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <View>
        <FilterComponent setFilter={setFilter} />
      </View>
      {isFetching ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={EventsData?.data ?? []}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          onRefresh={() => refetch()}
          refreshing={isFetching}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() => refetch()}
              tintColor={colors.primary}
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: metrics.screenHeight - 220,
  },
});

export default Explore;
