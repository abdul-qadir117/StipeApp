import React, { useContext, useState } from 'react';
import EventLayout from '../components/EventLayout';
import eventsStyles from '../events.styles';
import { Icons } from '../../../assets/images/svgs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setImage, setStep } from '../events.slice';
import { TouchableOpacity, Text, Image } from 'react-native';
import { PhotoModal } from '../../../components/PhotoModal';
import { EventContext } from '../../../lib/context/EventEditContext';
import { IsEditable } from '../helper';
const Step1 = () => {
  const { id: EventId } = useContext(EventContext);

  const dispatch = useAppDispatch();
  const photo = useAppSelector(state => state.event.image);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string>('');

  const onTakeOrChoosePhoto = (image: { uri: string }) => {
    setError('');
    dispatch(setImage(image));
  };

  const onNextBtnPress = () => {
    if (photo.uri === '') {
      setError('Please select an image or save as draft!');
    } else {
      dispatch(setStep(2));
    }
  };

  return (
    <EventLayout
      btnTitle={IsEditable(EventId) ? 'Save Changes' : 'Next'}
      onBtnPress={onNextBtnPress}>
      <TouchableOpacity
        style={eventsStyles.imagePicker}
        onPress={() => setIsOpen(true)}>
        {photo?.uri !== '' ? (
          <>
            <TouchableOpacity style={eventsStyles.removeIcon}>
              <Icons.Remove width={30} height={30} />
            </TouchableOpacity>
            <Image
              source={photo}
              style={eventsStyles.eventImage}
              resizeMode="contain"
            />
          </>
        ) : (
          <>
            <Icons.AddImage />
            <Text style={eventsStyles.imagePickerText}>
              Upload event cover image
            </Text>
            <Text style={eventsStyles.imagePickerPlaceholder}>
              We recommended a squarer image with 1080 x 1080 dimension and
              below 5MB
            </Text>
          </>
        )}
      </TouchableOpacity>
      <Text style={eventsStyles.errorLabel}>{error}</Text>

      <PhotoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onTakePhoto={onTakeOrChoosePhoto}
        onChoosePhoto={onTakeOrChoosePhoto}
      />
    </EventLayout>
  );
};

export default Step1;
