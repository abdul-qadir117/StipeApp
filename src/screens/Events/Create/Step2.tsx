import React, { useContext, useEffect, useState } from 'react';
import EventLayout from '../components/EventLayout';
import { InputFormHook } from '../../../components';
import eventsStyles from '../events.styles';
import { Adjust } from '../../../utils/mertrics';
import { View } from 'react-native';
import CategoryPicker from '../../../components/CategorySelector';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setDetails, setStep } from '../events.slice';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import GoogleAutoPlaces from '../../../components/GoogleAutocomplete';
import { IsEditable } from '../helper';
import {
  EventContext,
  SetEventContext,
} from '../../../lib/context/EventEditContext';
import { useUpdateEventMutation } from '../../../services/modules/event.api';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';
import Toast from 'react-native-toast-message';

const eventSchema = Yup.object().shape({
  eventName: Yup.string().required('Event name is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  category: Yup.array().required('Select atleast one category').min(0),
  address: Yup.string().required('Address is required'),
});

export type EventDateType = {
  eventName: string;
  date: string;
  time: string;
  description: string;
  category: string[];
  address: string;
};

const Step2 = () => {
  const dispatch = useAppDispatch();
  const navigation: any = useNavigation();
  const eventDetails = useAppSelector(state => state.event.detail);
  const group = useAppSelector(state => state.event.group);
  const photo = useAppSelector(state => state.event.image);
  const [eventUpdate, { isLoading, isSuccess }] = useUpdateEventMutation();

  const [categories, setCategories] = useState<string[]>([]);
  const { id: EventId } = useContext(EventContext);
  const setEventContext = useContext(SetEventContext);

  useEffectAfterSuccess(() => {
    setEventContext({ id: 0 });
    navigation.reset({
      index: 0,
      routes: [{ name: 'GroupsMain' }],
    });
    Toast.show({
      type: 'success',
      text2: 'Event Updated Successfully!',
    });
  }, isSuccess);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EventDateType>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      eventName: eventDetails?.name,
      description: eventDetails?.description,
      category: eventDetails?.categories?.length
        ? eventDetails?.categories
        : undefined,
      address: eventDetails?.address,
    },
  });

  useEffect(() => {
    if (EventId) {
      setCategories(eventDetails?.categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [EventId]);

  const onSubmit = (payload: any) => {
    if (IsEditable(EventId)) {
      const formData = new FormData();
      formData.append('event_name', payload?.eventName);
      formData.append('event_description', payload?.description);
      formData.append(
        'event_at',
        moment(new Date(payload?.date)).format('YYYY-MM-DD'),
      );
      formData.append('event_location', payload?.address);
      formData.append('group_id', group);
      formData.append('is_published', 1);
      formData.append('event_photo', {
        uri: photo.uri,
        name: 'eventLogo.png',
        type: 'image/png',
      });
      payload?.category?.map((category_id: string) => {
        formData.append('event_categories', { category_id });
      });
      formData.append('event_categories', JSON.stringify({ category_id: '1' }));
      formData.append('event_categories', JSON.stringify({ category_id: '2' }));

      eventUpdate({
        body: formData,
        id: EventId,
      });
    } else {
      const details = {
        name: payload?.eventName,
        description: payload?.description,
        date: payload?.date,
        time: payload?.time,
        categories: payload?.category,
        address: payload?.address,
      };
      dispatch(setDetails(details));
      dispatch(setStep(3));
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      setValue('category', categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <EventLayout
      btnTitle={IsEditable(EventId) ? 'Save Changes' : 'Next'}
      onBtnPress={handleSubmit(onSubmit)}
      btnLoading={isLoading}>
      <InputFormHook
        label="Event Name"
        name="eventName"
        control={control}
        placeholder="Enter event name here"
        inputStyle={eventsStyles.customInput}
        error={errors?.eventName ? errors?.eventName?.message : ''}
      />
      <InputFormHook
        label="Description"
        name="description"
        control={control}
        inputStyle={eventsStyles.customInput}
        placeholder="Enter here"
      />
      <GoogleAutoPlaces
        onSelectAddress={(address: string) => {
          setValue('address', address);
        }}
        label="Location"
        error={errors?.address ? errors?.address?.message : ''}
      />
      <View style={eventsStyles.dateTimeContainer}>
        <InputFormHook
          label="Date"
          name="date"
          control={control}
          placeholder="eg.19/04/2023"
          error={errors?.date ? errors?.date?.message : ''}
          type="date"
          inputStyle={[{ width: Adjust(355) / 2 }, eventsStyles.customInput]}
        />

        <InputFormHook
          label="Time"
          name="time"
          mode="time"
          control={control}
          placeholder="eg. 19/04/2023"
          error={errors?.time ? errors?.time?.message : ''}
          type="date"
          inputStyle={[{ width: Adjust(355) / 2 }, eventsStyles.customInput]}
        />
      </View>

      <CategoryPicker
        label="Categories (up to 3)"
        onChange={function (t: string): void {
          const isExist = categories.includes(t);
          if (isExist) {
            const updatedCategories = categories.filter(cat => cat !== t);
            setCategories([...updatedCategories]);
          } else if (categories?.length < 3) {
            setCategories([...categories, t]);
          }
        }}
        categories={categories}
        selectionNote="Select up to 3"
        error={errors?.category ? errors?.category?.message : ''}
      />
    </EventLayout>
  );
};

export default Step2;
