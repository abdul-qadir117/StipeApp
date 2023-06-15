import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import metrics from '../../utils/mertrics';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { useGetCategoriesQuery } from '../../services/modules/auth.api';

const FilterComponent = ({
  setFilter,
}: {
  setFilter: (id: string) => void;
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { data: categories } = useGetCategoriesQuery<any>('');

  const handleFilterPress = (filter: string) => {
    setFilter(filter === 'All' ? '' : filter);
    setActiveFilter(filter);
  };
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.filter]}
          onPress={() => handleFilterPress('All')}>
          <Text
            style={[
              styles.filterText,
              activeFilter === 'All' && styles.activeFilterText,
            ]}>
            All
          </Text>
        </TouchableOpacity>

        {categories?.map(({ name, id }: { name: string; id: string }) => (
          <TouchableOpacity
            key={id}
            style={[styles.filter]}
            onPress={() => handleFilterPress(id)}>
            <Text
              style={[
                styles.filterText,
                activeFilter === id && styles.activeFilterText,
              ]}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 50,
    marginTop: 6,
  },
  filter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: metrics.smallMargin,
  },
  filterText: {
    fontSize: 12,
    color: colors.textColor,
  },
  activeFilterText: {
    fontSize: fonts.size.large,
    color: colors.textColor,
  },
});

export default FilterComponent;
