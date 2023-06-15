import React, { useState } from 'react';
import EventLayout from '../components/EventLayout';
import { useAppSelector } from '../../../hooks/redux';
import { PeviewEvent } from '../components/PreviewEvent';
import { usePostEventMutation } from '../../../services/modules/event.api';
import moment from 'moment';
import ScucessModal from '../components/SuccessModal';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';

const ReviewEvent = () => {
  const [postEvent, { isLoading, isSuccess }] = usePostEventMutation();

  const event = useAppSelector(state => state.event);
  const [modal, setModal] = useState(false);
  useEffectAfterSuccess(() => {
    setModal(true);
  }, isSuccess);

  const eventData = {
    image: event.image,
    name: event?.detail?.name,
    description: event?.detail?.description,
    categories: event?.detail?.categories,
    date: event?.detail?.date,
    time: event?.detail?.time,
    address: event?.detail?.address,
    tickets: event?.tickets,
  };
  const onPostEvent = () => {
    const tickets = eventData?.tickets.map(ticket => {
      const {
        ticket_name,
        ticket_price,
        total_qty,
        private_code,
        release_date,
        ticketType,
        discount_code,
        discount_rate,
      } = ticket;

      let tickt: any = {
        ticket_name,
        ticket_price: ticketType === 'paid' ? ticket_price : 0,
        total_qty,
        is_public: private_code === '' ? 1 : 0,
        release_date: moment(new Date(release_date)).format('YYYY-DD-MM'),
      };

      // if (release_date) {
      //   tickt = {
      //     ...tickt,
      //     release_date: moment(new Date(release_date)).format('YYYY-DD-MM'),
      //   };
      // }
      if (private_code) {
        tickt = {
          ...tickt,
          private_code: private_code,
        };
      }

      if (discount_code) {
        tickt = {
          ...tickt,
          discount_code: discount_code,
          discount_rate: parseInt(discount_rate, 10),
        };
      }
      return tickt;
    });

    const formatedDate = moment(eventData?.date).format('DD/MM/YYYY');
    const formatedTime = moment(eventData?.date).format('hh:mm A');

    const event_at = moment(
      `${formatedDate} ${formatedTime}`,
      'DD/MM/YYYY HH:mm',
    );
    const formData = new FormData();
    formData.append('event_name', eventData?.name);
    formData.append('event_description', eventData?.description);
    formData.append('event_at', moment(event_at).format());
    formData.append('event_location', eventData?.address);
    formData.append('group_id', event?.group);
    formData.append('event_photo', {
      uri: event?.image?.uri,
      name: 'eventLogo.png',
      type: 'image/png',
    });
    eventData?.categories.map(category_id => {
      formData.append('event_categories', { category_id });
    });
    tickets.map(ticket => {
      formData.append('tickets', ticket);
    });
    postEvent(formData);
  };

  return (
    <EventLayout
      btnTitle={'Next'}
      onBtnPress={onPostEvent}
      btnLoading={isLoading}>
      <ScucessModal
        open={modal}
        setModalOpen={() => {
          setModal(false);
        }}
        eventData={eventData}
      />
      <PeviewEvent event={eventData} />
    </EventLayout>
  );
};

export default ReviewEvent;
