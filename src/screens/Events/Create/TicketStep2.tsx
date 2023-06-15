import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import EventLayout from '../components/EventLayout';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputFormHook from '../../../components/Input/InpuFormHook';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import eventsStyles from '../events.styles';
import colors from '../../../utils/colors';
import { Icons } from '../../../assets/images/svgs';
import { InfoModal } from '../../../components/InfoModal';
import { addTicket, updateTicketById } from '../events.slice';
import moment from 'moment';
import { useUpdateTicketMutation } from '../../../services/modules/event.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';

const ticketSchema = Yup.object().shape({
  ticket_name: Yup.string().required('Ticket name is required'),
  ticket_price: Yup.number().required('Price is required'),
  total_qty: Yup.number().required('Quantity is required'),
});

const ticketSchemaPublic = Yup.object().shape({
  ticket_name: Yup.string().required('Ticket name is required'),
  total_qty: Yup.number().required('Individual limit is required'),
});

export type TicketType = {
  available_qty: number;
  discount_code: string;
  discount_rate: number;
  is_public: 1;
  private_code: string;
  release_date: string;
  ticket_name: string;
  ticket_price: number;
  total_qty: number;
};

const TicketStep2 = () => {
  const ticketPayload = useAppSelector(state => state.event.ticketPayload);
  const ticketType = useAppSelector(state => state.event.ticketType);

  const getSchema = () => {
    if (ticketPayload?.id !== 0) {
      return ticketPayload?.ticket_price > 0
        ? ticketSchema
        : ticketSchemaPublic;
    } else {
      return ticketType === 'free' ? ticketSchemaPublic : ticketSchema;
    }
  };

  const checkIsFree = () => {
    if (ticketPayload?.id !== 0) {
      return ticketPayload?.ticket_price === 0 ? true : false;
    } else {
      return ticketType === 'free' ? true : false;
    }
  };
  const [scheduleRelease, setScheduleRelease] = useState(true);
  const [updateTicket, { isLoading, isSuccess }] = useUpdateTicketMutation();
  const [discountCode, setDiscountCode] = useState(false);
  const [privateCode, setPrivateCode] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TicketType>({
    resolver: yupResolver(getSchema()),
    defaultValues: {
      available_qty: ticketPayload?.available_qty,
      discount_code: ticketPayload?.discount_code,
      discount_rate: ticketPayload?.discount_rate,
      is_public: ticketPayload?.is_public,
      private_code: ticketPayload?.private_code,
      ticket_name: ticketPayload?.ticket_name,
      ticket_price: ticketPayload?.ticket_price,
      total_qty: ticketPayload?.total_qty,
    },
  });

  useEffectAfterSuccess(() => {
    const updatedTicket = {
      ...getValues(),
      event_id: ticketPayload?.id,
      id: ticketPayload?.id,
    };
    dispatch(updateTicketById({ id: ticketPayload?.id, updatedTicket }));
  }, isSuccess);

  useEffect(() => {
    if (ticketPayload?.release_date) {
      setScheduleRelease(true);
    }
    if (ticketPayload?.discount_code) {
      setDiscountCode(true);
    }
    if (ticketPayload?.private_code) {
      setPrivateCode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketPayload]);
  const dispatch = useAppDispatch();

  const onSubmit = (payload: any) => {
    if (ticketPayload?.id > 0) {
      const body = {
        ticket_name: payload?.ticket_name,
        ticket_price: payload?.ticket_price,
        discount_code: payload?.discount_code,
        discount_rate: payload?.discount_rate,
        total_qty: payload?.total_qty,
        is_public: payload?.is_public,
        release_date: moment(payload?.release_date).format('YYYY-MM-DD'),
        private_code: payload?.private_code,
        event_id: ticketPayload?.event_id,
      };
      updateTicket({ body, id: ticketPayload?.id });
    } else {
      dispatch(addTicket({ ...payload, ticketType }));
    }
  };

  const RenderLabelWithToggle = ({
    text,
    isEnabled,
    setIsEnabled,
    info = '',
    toggleDisable = false,
  }: {
    text: string;
    isEnabled?: boolean;
    setIsEnabled?: (value: boolean) => void;
    info?: string;
    toggleDisable?: boolean;
    iconDisbale?: boolean;
  }) => {
    const [infoOpen, setInfoOpen] = useState(false);
    return (
      <View style={eventsStyles.renderToggleHeader}>
        <View style={eventsStyles.labelIconContainer}>
          <Text style={eventsStyles.label}>{text} </Text>
          <TouchableOpacity
            onPress={() => {
              setInfoOpen(true);
            }}>
            <Icons.CircularWavyQuestionIcon />
          </TouchableOpacity>
        </View>
        {!toggleDisable && (
          <View style={eventsStyles.rowCenter}>
            <Text style={eventsStyles.whiteText}>No</Text>
            <Switch
              trackColor={{ false: '#767577', true: colors.primary }}
              thumbColor={isEnabled ? colors.textColor : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setIsEnabled}
              value={isEnabled}
            />
            <Text style={eventsStyles.whiteText}>Yes</Text>
          </View>
        )}

        <InfoModal
          isModalOpen={infoOpen}
          setIsModalOpen={setInfoOpen}
          heading={text}
          info={info}
        />
      </View>
    );
  };

  return (
    <EventLayout
      btnTitle={'Next'}
      onBtnPress={handleSubmit(onSubmit)}
      btnLoading={isLoading}>
      <RenderLabelWithToggle
        text="Ticket Name"
        toggleDisable
        info="Early bird or the best ticket for the best event ever!"
      />
      <InputFormHook
        label=""
        name="ticket_name"
        control={control}
        placeholder="Enter ticket name"
        inputStyle={eventsStyles.customInput}
        error={errors?.ticket_name ? errors?.ticket_name?.message : ''}
      />
      {checkIsFree() ? (
        <InputFormHook
          label="Individual limit"
          name="total_qty"
          control={control}
          inputStyle={eventsStyles.customInput}
          placeholder="Enter individual limit"
          error={errors?.total_qty ? errors?.total_qty?.message : ''}
        />
      ) : (
        <></>
      )}
      {!checkIsFree() ? (
        <>
          <InputFormHook
            label="Price"
            name="ticket_price"
            control={control}
            inputStyle={eventsStyles.customInput}
            placeholder="£ Enter price"
            error={errors?.ticket_price ? errors?.ticket_price?.message : ''}
          />
          <InputFormHook
            label="Quantity"
            name="total_qty"
            control={control}
            inputStyle={eventsStyles.customInput}
            placeholder="Enter quantity"
            error={errors?.total_qty ? errors?.total_qty?.message : ''}
          />
        </>
      ) : (
        <></>
      )}

      <RenderLabelWithToggle
        text="Scheduled release"
        setIsEnabled={value => {
          setScheduleRelease(value);
        }}
        info="Choose when these tickets drop. You can publish your event today, and delay ticket release for another date"
        isEnabled={scheduleRelease}
      />
      {scheduleRelease ? (
        <InputFormHook
          name="release_date"
          inputStyle={eventsStyles.customInput}
          control={control}
          placeholder="eg. 19/04/2023"
          type="date"
        />
      ) : (
        <></>
      )}
      {!checkIsFree() ? (
        <>
          <RenderLabelWithToggle
            text="Discount code"
            setIsEnabled={value => {
              setDiscountCode(value);
            }}
            isEnabled={discountCode}
            info="Add a discount code. Those who apply it get money off!"
          />
          {discountCode ? (
            <>
              <InputFormHook
                name="discount_code"
                control={control}
                inputStyle={eventsStyles.customInput}
                placeholder="Enter discount code"
              />
              <InputFormHook
                label="Set Discount (%)"
                name="discount_rate"
                inputStyle={eventsStyles.customInput}
                control={control}
                placeholder="Enter discount percentage"
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      <RenderLabelWithToggle
        text="Private Code"
        setIsEnabled={value => {
          setPrivateCode(value);
        }}
        info="Your attendees will need a super secrete code to be able to get this ticket! Set a private code to keep this ticket private to your attendees will need a secret code to be able to get this ticket! Set a private code to keep this ticket private"
        isEnabled={privateCode}
      />
      {privateCode ? (
        <InputFormHook
          name="private_code"
          inputStyle={eventsStyles.customInput}
          control={control}
          placeholder="Enter private code"
        />
      ) : (
        <></>
      )}
    </EventLayout>
  );
};

export default TicketStep2;
