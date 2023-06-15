import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './eventsAndGroups.styles';
import { Icons } from '../../assets/images/svgs/index';
import SelectDropdown from 'react-native-select-dropdown';
import { useGetIntrestsQuery } from '../../services/modules/auth.api';

const ProfileEventsAndGroups = ({ groups }: any) => {
  const [selectedTab, setSelectedTab] = useState('Events');
  const { data: instrests } = useGetIntrestsQuery<any>('');
  const [dropdownData, setDropDownData] = useState([]);
  useEffect(() => {
    let newarr: any = [];
    instrests?.data?.map((item: any) => {
      newarr.push({ name: item.key, id: item.id });
    });
    setDropDownData(newarr);
  }, [instrests]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Events');
          }}
          style={
            selectedTab === 'Events' ? styles.selectedTab : styles.unSelectedTab
          }>
          <Text
            style={
              selectedTab === 'Events'
                ? styles.selectedTabText
                : styles.unselectedTabText
            }>
            Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Groups');
          }}
          style={
            selectedTab === 'Groups' ? styles.selectedTab : styles.unSelectedTab
          }>
          <Text
            style={
              selectedTab === 'Groups'
                ? styles.selectedTabText
                : styles.unselectedTabText
            }>
            Groups
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Events' && (
        <View style={styles.eventsBody}>
          <SelectDropdown
            data={dropdownData}
            buttonStyle={styles.dropdownButton}
            defaultButtonText={'All'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem.name;
            }}
            rowTextForSelection={item => {
              return item?.name;
            }}
          />
          <View style={styles.bottomItem}>
            <View style={styles.roleTitleContainer}>
              <Text style={styles.roletitle}>
                Musical Medicine x De La Disco
              </Text>
              <Text style={styles.rolesubtitle}>Web 26 Oct</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icons.EventsItem />
            </View>
          </View>
        </View>
      )}
      {selectedTab === 'Groups' && (
        <View style={styles.eventsBody}>
          <SelectDropdown
            data={dropdownData}
            buttonStyle={styles.dropdownButton}
            defaultButtonText={'All'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem.name;
            }}
            rowTextForSelection={item => {
              return item?.name;
            }}
          />
          <FlatList
            data={groups?.data}
            style={{}}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={
                    index === groups?.data.length
                      ? styles.lastbottomItem
                      : styles.bottomItem
                  }>
                  <View style={styles.roleTitleContainer}>
                    <Text style={styles.roletitle}>{item.name}</Text>
                    <View style={styles.circularContainer}>
                      <Text style={styles.countText}>12</Text>
                    </View>
                  </View>
                  <View style={styles.iconContainer}>
                    <Icons.GroupItem />
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ProfileEventsAndGroups;
