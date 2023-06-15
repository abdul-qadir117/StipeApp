import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
import fonts from '../../utils/fonts';

interface AvatarClusterProps {
  avatars: string[];
  count: number;
}

const AvatarCluster: React.FC<AvatarClusterProps> = ({ avatars, count }) => {
  const renderAvatar = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.avatar} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={avatars}
        renderItem={renderAvatar}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.avatarsContainer}
      />
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{`+${count}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.smallMargin,
    marginLeft: metrics.smallMargin,
  },
  avatar: {
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: 50,
    marginLeft: -10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarsContainer: {
    marginLeft: metrics.smallMargin,
  },
  countContainer: {
    position: 'absolute',
    top: 0,
    left: 80,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  countText: {
    color: colors.textColor,
    fontSize: fonts.size.medium,
  },
});

export default AvatarCluster;
