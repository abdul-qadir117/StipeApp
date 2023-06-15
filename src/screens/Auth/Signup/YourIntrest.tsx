import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AuthLayout } from '../../../components';
import styles from '../auth.styles';
import { useAppDispatch } from '../../../hooks/redux';
import { updateSignUpPayload } from '../auth.slice';
import { useGetCategoriesQuery } from '../../../services/modules/auth.api';
import { Categories } from '../../../utils/Categories';
import colors from '../../../utils/colors';

const YourIntrest = ({ navigation }: any) => {
  const { data: instrests, isLoading } = useGetCategoriesQuery<any>('');
  const [categories, setCategories] = useState<any>([]);
  const dispatch = useAppDispatch();

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSubInterests, setSubInterests] = useState<string[]>([]);
  const [selectedInterestsError, setSelectedInterestsError] =
    useState<boolean>(false);

  useEffect(() => {
    const filteredCategories =
      instrests?.length > 0
        ? instrests?.filter((obj: { id: string }) =>
            selectedInterests.includes(obj.id),
          )
        : [];
    const childIntrest: any[] = [];
    filteredCategories.map((cat: any) => {
      childIntrest.push(...cat?.subCategories);
    });
    setCategories(childIntrest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInterests]);

  const onSubmit = () => {
    if (selectedInterests.length < 3) {
      setSelectedInterestsError(true);
    } else {
      setSelectedInterestsError(false);
      navigation.navigate('signup/personalInfo');
      dispatch(
        updateSignUpPayload({
          key: 'interests',
          data: selectedInterests,
        }),
      );
    }
  };

  const onPressItem = (item: string) => {
    const isExist = selectedInterests.includes(item);
    setSelectedInterestsError(false);
    setSubInterests([]);
    if (isExist) {
      const updatedCategories = selectedInterests.filter(cat => cat !== item);
      setSelectedInterests([...updatedCategories]);
    } else if (selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  const onPressSubItem = (item: string) => {
    const isExist = selectedSubInterests.includes(item);

    if (isExist) {
      const updatedCategories = selectedSubInterests.filter(
        cat => cat !== item,
      );
      setSubInterests([...updatedCategories]);
    } else if (selectedSubInterests.length < 5) {
      setSubInterests([...selectedSubInterests, item]);
    }
  };

  const GetIcon = (categoryName: string, active: boolean) => {
    const filteredCategory = Categories.filter(({ name }) =>
      categoryName.includes(name),
    );
    if (filteredCategory.length > 0) {
      const ICON = active
        ? filteredCategory[0]?.ActiveIcon
        : filteredCategory[0]?.Icon;
      return <ICON />;
    } else {
      return (
        <View
          style={active ? styles.activeContainer : styles.deActiveContainer}>
          <Text style={styles.text}>{categoryName}</Text>
        </View>
      );
    }
  };

  return (
    <AuthLayout
      title="Select interest max 3"
      onBtnPress={onSubmit}
      btnTitle={'Next'}
      step={3}
      headerTitle="Sign up">
      <Text
        style={[
          styles.intrestLabel,
          selectedInterestsError && { color: colors.error },
        ]}>
        SELECT UMBRELLA INTERESTS MAX 3
      </Text>
      <View>
        <View style={styles.tilesTopContainer}>
          {instrests?.map(({ name, id }: { name: string; id: string }) => {
            return (
              <TouchableOpacity
                key={name}
                style={styles.categoryTile}
                onPress={() => {
                  onPressItem(id);
                }}>
                {GetIcon(name, selectedInterests.includes(id))}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {selectedInterests.length > 0 ? (
        <Text style={[styles.intrestLabel, { paddingVertical: 20 }]}>
          SELECT INTERESTS MAX 5
        </Text>
      ) : (
        <></>
      )}

      <View style={styles.categoryOptionContainer}>
        <View style={styles.tilesTopContainer}>
          {categories?.map(({ name, id }: { name: string; id: string }) => {
            return (
              <TouchableOpacity
                key={name}
                style={styles.categoryTile}
                onPress={() => {
                  onPressSubItem(id);
                }}>
                {GetIcon(name, selectedSubInterests.includes(id))}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </AuthLayout>
  );
};

export default YourIntrest;
