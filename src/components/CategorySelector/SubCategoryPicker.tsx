import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import { Categories } from '../../utils/Categories';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetCategoriesQuery } from '../../services/modules/auth.api';

type CategoryPickerType = {
  label?: string;
  onChange?: (t: string) => void;
  error?: string;
  selectionNote?: string;
  categories: string[];
};

const SubCategoryPicker = ({
  label = '',
  categories = [],
}: CategoryPickerType) => {
  const { data: categoriesData } = useGetCategoriesQuery<any>('');
  const innerArrays = categoriesData?.map((obj: any) => obj?.subCategories);
  const subCategories = innerArrays.flat();

  const GetCategory = (catId: string) => {
    const CategoryName = subCategories
      ? subCategories.filter(({ id }: { id: string }) => id === catId)[0]?.name
      : '';
    const filteredCategory = CategoryName
      ? Categories.filter(({ name }) => CategoryName?.includes(name))
      : [];

    if (filteredCategory.length > 0) {
      const ICON = filteredCategory[0]?.Icon;
      return <ICON />;
    } else {
      return (
        <View style={styles.deActiveContainer}>
          <Text style={styles.text}>{CategoryName}</Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.feildContainer]}>
      <View style={styles.labelContainer}>
        {label && <Text style={styles.fieldLabel}>{label}</Text>}
      </View>
      {categories.length > 0 && (
        <ScrollView
          contentContainerStyle={[
            styles.tilesTopContainer,
            styles.removeMargin,
          ]}>
          {categories.map(id => {
            return GetCategory(id);
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default SubCategoryPicker;
