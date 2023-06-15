import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from '../build.styles';
import { Icons } from '../../../assets/images/svgs';
import colors from '../../../utils/colors';
import ModuleLabel from '../../../components/ModuleLabel';
import AddGroup from './AddGroup';
import { Image } from 'react-native';
const GroupsList = ({ groups, navigation, onPressGroup, loading }: any) => {
  return (
    <View>
      {groups?.data?.length > 0 && !loading && (
        <View style={styles.grouplistTitleContainer}>
          <ModuleLabel text="Groups" />
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
      )}
      {groups?.data?.length === 0 && !loading && <AddGroup />}

      <View style={styles.listRow}>
        {groups?.data?.length > 0 && !loading && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateGroup');
            }}>
            <Icons.CreateGroupListButton
              style={styles.grouplistItemContainer}
            />
          </TouchableOpacity>
        )}
        {!loading ? (
          <FlatList
            data={groups?.data}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={item?.id}
                  onPress={() => onPressGroup(item?.id)}
                  style={styles.grouplistItemContainer}>
                  <View style={styles.iconContainer}>
                    {item?.logo === null ? (
                      <Icons.GroupItem />
                    ) : (
                      <Image
                        source={{
                          uri: `https://tbcdev.s3.eu-west-2.amazonaws.com/${item?.logo}`,
                        }}
                        style={styles.logo}
                      />
                    )}
                  </View>
                  <View>
                    <Text style={styles.groupLabel}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View style={styles.groupLoader}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )}
      </View>
    </View>
  );
};

export default GroupsList;
