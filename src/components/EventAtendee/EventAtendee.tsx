import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './EventAtendee.styles';
import { Icons } from '../../assets/images/svgs';
import { HeadingCustom } from '../../screens/Groups/components/Heading';
import SelectDropdown from 'react-native-select-dropdown';
import dummyData from '../Card/dummydata';
import Card from '../Card/Card';
const dropdownData = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4', color: 'red' },
];
const EventAtendee = () => {
  return (
    <View style={styles.container}>
      <HeadingCustom text={'Insights'} />
      <View style={styles.section}>
        <View style={styles.wrapper}>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Female</Text>
            <Icons.RoleIcon />
          </View>
          <Text style={styles.title}>50%</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.singleRow}>
            <Text style={styles.description}>Avg. Age</Text>
            <Icons.RoleIcon />
          </View>
          <Text style={styles.title}>23</Text>
        </View>
      </View>
      <View style={styles.Subwrapper}>
        <View style={styles.singleRow}>
          <Text style={styles.description}>No.1 College</Text>
          <Icons.RoleIcon />
        </View>
        <Text style={styles.title}>Oxford College</Text>
      </View>
      <View style={styles.singleRow}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.outlinedButton}>
            <Text style={styles.description}>List</Text>
          </TouchableOpacity>
          <SelectDropdown
            data={dropdownData}
            rowTextStyle={styles.dropdownButtonText}
            buttonStyle={styles.dropdownButton}
            defaultButtonText={'All'}
            buttonTextStyle={styles.dropdownButtonText}
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
          <TouchableOpacity style={styles.outlinedButton}>
            <Text style={styles.description}>All</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.exportButton}>
          <Icons.CheckMark />
          <Text style={styles.title}> Export </Text>
        </TouchableOpacity>
      </View>
      <Card {...dummyData} />
    </View>
  );
};

export default EventAtendee;
