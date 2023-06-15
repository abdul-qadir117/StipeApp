import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';

const PillLikeFilters = () => {
  const [activeTag, setActiveTag] = useState('All');

  const handleTagPress = (tag: string) => {
    setActiveTag(tag);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[styles.tag, activeTag === 'All' && styles.activeTag]}
        onPress={() => handleTagPress('All')}>
        <Text
          style={[styles.tagText, activeTag === 'All' && styles.activeTagText]}>
          All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tag, activeTag === 'My Interests' && styles.activeTag]}
        onPress={() => handleTagPress('My Interests')}>
        <Text
          style={[
            styles.tagText,
            activeTag === 'My Interests' && styles.activeTagText,
          ]}>
          My Interests
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tag, activeTag === 'My Groups' && styles.activeTag]}
        onPress={() => handleTagPress('My Groups')}>
        <Text
          style={[
            styles.tagText,
            activeTag === 'My Groups' && styles.activeTagText,
          ]}>
          My Groups
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tag, activeTag === 'My College' && styles.activeTag]}
        onPress={() => handleTagPress('My College')}>
        <Text
          style={[
            styles.tagText,
            activeTag === 'My College' && styles.activeTagText,
          ]}>
          My College
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tag, activeTag === 'My City' && styles.activeTag]}
        onPress={() => handleTagPress('My City')}>
        <Text
          style={[
            styles.tagText,
            activeTag === 'My City' && styles.activeTagText,
          ]}>
          My City
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tag, activeTag === 'My Country' && styles.activeTag]}
        onPress={() => handleTagPress('My Country')}>
        <Text
          style={[
            styles.tagText,
            activeTag === 'My Country' && styles.activeTagText,
          ]}>
          My Country
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 5,
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    borderRadius: metrics.cardBorderRadius,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  activeTag: {
    backgroundColor: colors.textColor,
  },
  tagText: {
    fontSize: fonts.size.regular,
    color: colors.textColor,
  },
  activeTagText: {
    color: colors.backgroundColor,
  },
});

export default PillLikeFilters;
