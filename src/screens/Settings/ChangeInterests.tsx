import React, { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { AuthLayout } from '../../components';
import Option from '../../components/Option';
import styles from './settings.style';
import { useGetIntrestsQuery } from '../../services/modules/auth.api';
import { useAppDispatch } from '../../hooks/redux';
import { useUserUpdateMutation } from '../../services/modules/user.api';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
import { setUser } from '../Auth/auth.slice';

const ChangeInterest = ({ navigation }: any) => {
  const { data: instrests, isLoading } = useGetIntrestsQuery<any>('');
  const [updateUser, { isSuccess, data }] = useUserUpdateMutation();
  const dispatch = useAppDispatch();
  const [selectedInterests, setSelectedInterests] = useState<any>([]);
  const [selectedInterestsError, setSelectedInterestsError] =
    useState<boolean>(false);

  function onlyUnique(value: any, index: any, array: any) {
    return array.indexOf(value) === index;
  }

  useEffectAfterSuccess(() => {
    dispatch(setUser(data));
    navigation.goBack();
  }, isSuccess);

  const onSubmit = () => {
    let unique = selectedInterests.filter(onlyUnique);
    if (unique.length < 3) {
      setSelectedInterestsError(true);
    } else {
      setSelectedInterestsError(false);
      const formData: any = new FormData();
      unique?.map((item: any) => {
        formData.append('interests', item);
      });
      updateUser({
        body: formData,
      });
    }
  };

  function onPressItem(item: any) {
    let items = selectedInterests;
    let include = items.includes(item.id);
    if (include) {
      const index = items.indexOf(item.id);
      items.splice(index, 1);
      setSelectedInterests(items);
    } else {
      items.push(item.id);
      setSelectedInterests(items);
    }
  }

  return (
    <AuthLayout
      title="What are you most in to?"
      subTitle="Up to 3"
      btnTitle="Save"
      onBtnPress={onSubmit}>
      <FlatList
        data={instrests ? instrests?.data : []}
        numColumns={2}
        nestedScrollEnabled
        renderItem={({ item, index }: any) => (
          <Item
            index={index}
            item={item}
            onPress={(interest: any) => onPressItem(interest)}
          />
        )}
        keyExtractor={item => item.key}
      />
      {selectedInterestsError ? (
        <View style={styles.interestsErrorContainer}>
          <Text style={styles.interestsError}>
            Please select alteast 3 interests
          </Text>
        </View>
      ) : (
        <></>
      )}
      {isLoading ? <ActivityIndicator /> : <></>}
    </AuthLayout>
  );
};

const Item = ({
  item,
  index,
  onPress,
}: {
  item: { key: string; icon: string };
  index: number;
  onPress?: any;
}) => {
  const [selected, setSelected] = useState(false);
  const onSelect = () => {
    setSelected(!selected);
    onPress(item);
  };
  function getPath() {
    switch (item.icon) {
      case 'drama-icon':
        return require('../../assets/images/drama-icon.png');
      case 'art-music-icon':
        return require('../../assets/images/art-music-icon.png');
      case 'nightlife-icon':
        return require('../../assets/images/nightlife-icon.png');
      case 'culture-icon':
        return require('../../assets/images/culture-icon.png');
      case 'future-icon':
        return require('../../assets/images/future-icon.png');
      case 'mind-icon':
        return require('../../assets/images/mind-icon.png');
      case 'sport-icon':
        return require('../../assets/images/sport-icon.png');
      case 'change-icon':
        return require('../../assets/images/change-icon.png');
      default:
        return require('../../assets/images/drama-icon.png');
    }
  }
  return (
    <Option
      title={item?.key}
      key={index}
      onPress={onSelect}
      isSelected={selected}
      Icon={getPath()}
      customContainer={[
        styles.container,
        index % 2 === 0 ? { marginRight: 6 } : { marginLeft: 5 },
      ]}
    />
  );
};
export default ChangeInterest;
