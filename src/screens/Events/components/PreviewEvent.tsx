import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Icons } from '../../../assets/images/svgs';
import ModuleLabel from '../../../components/ModuleLabel';
import CategoryPicker from '../../../components/CategorySelector';
import moment from 'moment';
import Ticket from './Ticket';
import { useAppDispatch } from '../../../hooks/redux';
import { setStep } from '../events.slice';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components';

type EventPreviewType = {
  image: { uri: string };
  name: string;
  description: string;
  categories: string[];
  date: string;
  time: string;
  tickets: Array<any>;
  address: string;
  group?: {
    id: string;
    name: string;
    description: string;
    logo: { uri: string };
  };
};

export const PeviewEvent = ({
  event,
  isPreview = false,
}: {
  event: EventPreviewType;
  isPreview?: boolean;
}) => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const { image, name, description, categories, date, tickets, address, time } =
    event;
  const selectedCategories = categories.map((cat: any) => cat?.category?.id);
  return (
    <ScrollView>
      <Image source={image} style={styles.image} />
      <TouchableOpacity
        onPress={() => {
          if (!isPreview) {
            dispatch(setStep(3));
          } else {
            navigation.goBack();
          }
        }}
        style={styles.backBtn}>
        <Icons.LeftArrow />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description} numberOfLines={4}>
        {description === '' ? 'No Descritpion' : description}
      </Text>
      <ModuleLabel text="Categories" customStyle={styles.customMargin} />
      {categories?.length > 0 ? (
        <CategoryPicker categories={selectedCategories} />
      ) : (
        <Text style={styles.noCategory}>No category</Text>
      )}
      {isPreview && (
        <Button
          customStyle={styles.buyTicket}
          onPress={() => {
            navigation.navigate('CheckOut');
          }}
          title="Buy Tickets"
        />
      )}
      <ModuleLabel text="Date & Time" customStyle={styles.customMargin} />
      <Text style={styles.date}>
        {`${moment(new Date(date)).format('ddd, MMM YYYY')} . ${moment(
          new Date(time),
        ).format('HH:mm')}`}
      </Text>
      <ModuleLabel text="Location" />
      <Text style={styles.address} numberOfLines={3}>
        {address === '' ? 'Address not available' : address}
      </Text>

      {!isPreview && (
        <>
          <ModuleLabel text="Tickets" customStyle={styles.customMargin} />
          <View style={styles.ticketContainerScroll}>
            {tickets?.map((ticket, index) => (
              <Ticket key={index} ticket={ticket} isPreview={isPreview} />
            ))}
          </View>
        </>
      )}
      {isPreview && (
        <>
          <ModuleLabel text="Organized by" customStyle={styles.customMargin} />
          <View style={styles.listRow}>
            <View style={styles.bottomItem}>
              <View>
                <Image style={styles.groupLogo} source={event?.group?.logo} />
              </View>
              <View style={styles.roleTitleContainer}>
                <Text style={styles.roletitle}>{event?.group?.name}</Text>
                <Text style={styles.rolesubtitle}>
                  {event?.group?.description}
                </Text>
                <Button
                  customStyle={styles.custombtn}
                  title="Follow"
                  onPress={() => {}}
                />
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};
