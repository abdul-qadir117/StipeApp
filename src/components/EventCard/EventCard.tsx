import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Icons } from '../../assets/images/svgs';
// import Tag from '../SingleTag/SingleTag';
import AvatarCluster from '../AvatarClustor/AvatarClustor';
import SvgIconButton from '../SvgIconButton/SvgIconButton';
import { removeExtraText } from '../../utils/helper';
import metrics from '../../utils/mertrics';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
// import Images from '../../assets/images';
import CategoryPicker from '../CategorySelector';
import moment from 'moment';
import { useAddToWishListMutation } from '../../services/modules/event.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const avatarsDummyData = [
  'https://i.pravatar.cc/600',
  'https://i.pravatar.cc/700',
  'https://i.pravatar.cc/800',
];

export type EventType = {
  event_image: string;
  id: string;
  event_at: string;
  event_name: string;
  event_description: string;
  categories?: string[];
};
type EventCardProps = {
  data: EventType;
  showAvatar?: boolean;
  showFavIcon?: boolean;
  showBorder?: boolean;
};
// const { Music, Sports, Drama } = Images;
const { Heart } = Icons;
const EventCard = (props: EventCardProps) => {
  const [addToWishList, { isLoading, isSuccess }] = useAddToWishListMutation();
  const [readMore, setReadMore] = useState(false);
  const eventImage = require('../../assets/images/event.png');
  const { data } = props;
  const {
    event_image,
    event_at,
    event_name,
    event_description,
    categories,
    id,
  } = data;

  const onAddToWishList = () => {
    addToWishList({ event_id: id });
  };

  useEffectAfterSuccess(() => {
    Toast.show({
      type: 'success',
      text2: 'Event added to your wishlist.',
    });
  }, isSuccess);
  return (
    <View
      style={
        props.showBorder ? styles.cardContainer : styles.borderlessCardContainer
      }>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={event_image ? event_image : eventImage}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.DetailsWrapper}>
        {event_at && (
          <View style={styles.eventDetailsWrapper}>
            <Text style={styles.dateTime}>
              {moment(event_at).format('ddd, MMM YYYY . HH:mm')}
            </Text>
          </View>
        )}
        <Text style={styles.eventName}>{event_name}</Text>
        {event_description?.length && (
          <View>
            <Text style={styles.text}>
              {removeExtraText(event_description, 77, readMore)}
              {event_description?.length > 77 && (
                <TouchableOpacity onPress={() => setReadMore(prev => !prev)}>
                  <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
              )}
            </Text>
          </View>
        )}
        <View style={styles.tagsContainer}>
          {categories && (
            <ScrollView horizontal nestedScrollEnabled={false}>
              <CategoryPicker categories={categories} />
            </ScrollView>
          )}
        </View>
        <View style={styles.avatarSvgContainer}>
          {props.showAvatar && (
            <View>
              <AvatarCluster avatars={avatarsDummyData} count={12} />
            </View>
          )}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            props.showFavIcon && (
              <TouchableOpacity>
                <SvgIconButton
                  Icon={Heart}
                  color="#BC61F5"
                  outlineColor="transparent"
                  onPress={onAddToWishList}
                />
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.whiteBorderColor,
    borderRadius: metrics.cardBorderRadius,
    backgroundColor: colors.backgroundColor,
    shadowColor: 'rgba(188, 97, 245, 0.43)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 10,
    marginBottom: metrics.largeMargin,
  },
  borderlessCardContainer: {
    justifyContent: 'flex-start',
    borderRadius: metrics.cardBorderRadius,
    backgroundColor: colors.backgroundColor,
  },
  imageContainer: {
    alignItems: 'center',
    top: 10,
    height: 360,
    width: '100%',
    padding: metrics.smallPadding,
  },
  DetailsWrapper: {
    paddingLeft: metrics.smallPadding,
  },
  eventDetailsWrapper: {
    flexDirection: 'row',
    marginBottom: metrics.smallMargin,
  },
  dateTime: {
    ...fonts.style.input,
    fontWeight: '600',
    marginTop: metrics.defaultMargin,
  },

  eventName: {
    ...fonts.style.heading,
    textTransform: 'capitalize',
  },
  tagsContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  avatarSvgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: metrics.defaultMargin,
    marginBottom: metrics.defaultMargin,
  },
  text: {
    color: '#888888',
    fontWeight: '700',
  },
  readMore: {
    color: '#BC61F5',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: metrics.imageBorderRaduis,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    bottom: 11,
    left: 11,
    position: 'absolute',
    height: metrics.images.large,
    width: metrics.images.large,
  },
});

export default EventCard;
