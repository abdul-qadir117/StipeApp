import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Icons } from '../../../assets/images/svgs';
import styles from '../events.styles';
import { useGroupQuery } from '../../../services/modules/group.api';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setGroup } from '../events.slice';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../utils/colors';
const GroupsSelectionList = () => {
  const { data: groups } = useGroupQuery({});
  const dispatch = useAppDispatch();
  const selectedGroup = useAppSelector(state => state.event.group);
  const onGroupSelection = (groupId: string) => {
    dispatch(setGroup(groupId));
  };

  return (
    <View>
      <FlatList
        data={groups?.data}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item?.id}
              onPress={() => onGroupSelection(item?.id)}
              style={styles.grouplistItemContainer}>
              <View>
                <Image
                  style={styles.logo}
                  source={{ uri: item?.groupPics[0]?.groupImage }}
                />
              </View>

              <View>
                <Text style={styles.groupLabel}>{item.name}</Text>
              </View>
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  disabled={true}
                  value={item?.id === selectedGroup}
                  tintColor={colors.primary}
                  onCheckColor={colors.textColor}
                  onFillColor={colors.primary}
                  onTintColor={colors.primary}
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GroupsSelectionList;
