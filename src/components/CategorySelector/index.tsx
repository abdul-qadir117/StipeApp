import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import OutlinedButtonWithIcon from '../Button/OutlinedButtonWithIcon';
import { Icons } from '../../assets/images/svgs';
import { Categories } from '../../utils/Categories';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetCategoriesQuery } from '../../services/modules/auth.api';
import colors from '../../utils/colors';

type CategoryPickerType = {
  label?: string;
  onChange?: (t: string) => void;
  error?: string;
  selectionNote?: string;
  categories: string[];
};

const CategoryPicker = ({
  label = '',
  error = '',
  selectionNote,
  categories = [],
  onChange,
}: CategoryPickerType) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { isLoading, data: categoriesData } = useGetCategoriesQuery<any>('');

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

  const GetCategory = (catId: string) => {
    const CategoryName = categoriesData
      ? categoriesData.filter(({ id }: { id: string }) => id === catId)[0]?.name
      : '';

    const filteredCategory = Categories.filter(({ name }) =>
      CategoryName.includes(name),
    );

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
        {categories.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setModalOpen(true);
            }}>
            {label && <Text style={styles.fieldLabel}>Edit</Text>}
          </TouchableOpacity>
        )}
      </View>
      {categories.length > 0 ? (
        <ScrollView
          contentContainerStyle={[
            styles.tilesTopContainer,
            styles.removeMargin,
          ]}>
          {categories.map(id => {
            return GetCategory(id);
          })}
        </ScrollView>
      ) : (
        <OutlinedButtonWithIcon
          title="Add Category"
          onPress={() => {
            setModalOpen(true);
          }}
          IconBtnTitleStyles={styles.inputTextStyle}
          customStyle={styles.fullWidthPurple}
        />
      )}

      {modalOpen && (
        <Modal animationType="slide" visible={modalOpen} transparent>
          {isLoading ? (
            <ActivityIndicator color={colors.primary} />
          ) : (
            <View style={styles.mainContainer}>
              <View style={styles.innerContainer}>
                <TouchableOpacity
                  style={styles.crossContainer}
                  onPress={() => {
                    setModalOpen(false);
                  }}>
                  <Icons.CrossIconCircular />
                </TouchableOpacity>
                <View style={styles.headingContainer}>
                  <View style={styles.headingInnerContainer}>
                    <Text style={styles.selectCategoryText}>
                      Select Category
                    </Text>
                    <Text style={styles.selectCategroyTextSec}>
                      {selectionNote ?? 'Select one category'}
                    </Text>
                  </View>
                </View>

                <View style={styles.categoryOptionContainer}>
                  <SafeAreaView style={styles.bottomAreaContainer}>
                    <ScrollView
                      contentContainerStyle={styles.tilesTopContainer}>
                      {categoriesData?.map(
                        ({ name, id }: { name: string; id: string }) => {
                          return (
                            <TouchableOpacity
                              key={name}
                              style={styles.categoryTile}
                              onPress={() => (onChange ? onChange(id) : {})}>
                              {GetIcon(name, categories.includes(id))}
                            </TouchableOpacity>
                          );
                        },
                      )}
                    </ScrollView>
                  </SafeAreaView>
                </View>
              </View>
            </View>
          )}
        </Modal>
      )}

      {error !== '' && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

export default CategoryPicker;
