import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import styles from '../events.styles';
import Step0 from './Step0';
import { useAppSelector } from '../../../hooks/redux';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import TicketStep1 from './TicketStep1';
import TicketStep2 from './TicketStep2';
import ReviewEvent from './ReviewEvent';
import { SetEventContext } from '../../../lib/context/EventEditContext';

const CreateEvent = ({ route }: any) => {
  const step = useAppSelector(state => state.event.step);
  const setEventContext = useContext(SetEventContext);

  useEffect(() => {
    if (route?.params?.id) {
      setEventContext({ id: route?.params?.id });
    }
  }, [route, setEventContext]);

  const renderContent = () => {
    switch (step) {
      case 0:
        return <Step0 />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <TicketStep1 />;
      case 5:
        return <TicketStep2 />;
      case 6:
        return <ReviewEvent />;
      default:
        return <Step0 />;
    }
  };

  return <View style={[styles.container]}>{renderContent()}</View>;
};

export default CreateEvent;
