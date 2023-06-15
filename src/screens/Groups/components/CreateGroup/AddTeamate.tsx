import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icons } from '../../../../assets/images/svgs';
import styles from './createGroup.styles';
import { Input } from '../../../../components';
const AddTeamateItem = ({ item, onPressItem }: any) => {
  const [role, setRole] = useState('');
  return (
    <View
      style={[
        styles.addTeamMainContainer,
        !item?.isSelected && {
          height: 80,
        },
      ]}>
      <View style={styles.addTeamateItemContainer}>
        <View style={styles.addTeamateIconContainer}>
          <Icons.TeamateItem />
        </View>
        <View style={styles.addTeamateDescriptionContainer}>
          <Text style={styles.addTeamitemName}>
            {item?.firstName} {item?.lastName}
          </Text>
          <Text style={styles.addTeamitemCollegeName}>
            {item?.college === null ? '--' : item?.college?.name}
          </Text>
          <Text style={styles.addTeamitemDegreeType}>{item?.degreeType}</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => onPressItem(role)}
            style={
              item.isSelected ? styles.purpleCircleCheckMark : styles.CheckMark
            }>
            {item.isSelected ? <Icons.CheckMark /> : <Icons.EmptyCircle />}
          </TouchableOpacity>
        </View>
      </View>
      {item?.isSelected && (
        <Input value={role} onChange={setRole} placeholder="Enter role title" />
      )}
    </View>
  );
};

export default AddTeamateItem;
