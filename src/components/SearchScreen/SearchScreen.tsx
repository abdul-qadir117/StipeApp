import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import metrics from '../../utils/mertrics';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { Input } from '..';

const SearchScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Music',
    'College Party',
    'Summer Vibes',
  ]);

  const { Search, Close } = Icons;

  const handleDeleteSearch = (str: string) => {
    const updatedSearches = recentSearches.filter(item => item !== str);
    setRecentSearches(updatedSearches);
  };

  const handleClearSearches = () => {
    setRecentSearches([]);
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Search Event" value={search} onChange={setSearch} />
      <View style={styles.recentSearch}>
        <Text style={styles.heading}>Recent Searches</Text>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClearSearches}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {recentSearches.map((query, index) => (
        <View key={index} style={styles.recentBar}>
          <Search height={30} width={30} />
          <Text style={styles.title}>{query}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteSearch(query)}>
            <Close height={30} width={30} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.smallPadding,
    backgroundColor: colors.backgroundColor,
  },
  clearButton: {
    alignItems: 'center',
    marginTop: metrics.defaultMargin,
    marginBottom: metrics.smallMargin,
  },
  clearButtonText: {
    fontSize: fonts.size.medium,
    fontWeight: '500',
    lineHeight: 17,
    color: colors.primary,
  },
  recentBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 4,
    marginBottom: metrics.smallMargin,
  },
  recentSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: fonts.size.regular,
    color: colors.textColor,
    marginLeft: metrics.smallMargin,
  },
  heading: {
    color: colors.textColor,
    fontSize: fonts.size.large,
    fontWeight: '500',
  },
  deleteButton: {
    marginLeft: metrics.smallMargin,
  },
});

export default SearchScreen;
