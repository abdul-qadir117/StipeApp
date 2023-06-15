import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import metrics from '../../utils/mertrics';
import colors from '../../utils/colors';
import mertrics from '../../utils/mertrics';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const { Heart, Search, Menu } = Icons;
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => navigation.navigate('Wishlist')}>
          <Heart height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => navigation.navigate('EventSearch')}>
          <Search height={30} width={30} />
        </TouchableOpacity>
        <View style={styles.inline}>
          <Menu height={30} width={30} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.defaultMargin,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: colors.textColor,
  },
  inline: {
    marginRight: mertrics.smallMargin,
  },
  row: {
    flexDirection: 'row',
  },
});

export default NavBar;
