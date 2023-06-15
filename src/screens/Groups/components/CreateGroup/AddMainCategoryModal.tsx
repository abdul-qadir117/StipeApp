import React, { useEffect, useState } from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
// import styles from './createGroup.styles';
import { useGetCategoriesQuery } from '../../../../services/modules/auth.api';
import styles from './categoryStyle';
import { Categories } from '../../../../utils/Categories';
import { Icons } from '../../../../assets/images/svgs';
export const AddMainCategory = ({
  addMainCategoryModalOpen,
  mainCategory,
  setMainCategoryError = () => {},
  setaddMainCategoryModalOpen,
  setMainCategory,
  setSubCategories,
  subCategories,
}: any) => {
  const { data: umbrellaCat } = useGetCategoriesQuery<any>('');

  const [categories, setCategories] = useState<any>([]);

  // const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  // const [selectedSubInterests, setSubInterests] = useState<string[]>([]);

  useEffect(() => {
    const filteredCategories =
      umbrellaCat?.length > 0
        ? umbrellaCat?.filter((obj: { id: string }) =>
            mainCategory.includes(obj.id),
          )
        : [];
    const childIntrest: any[] = [];
    filteredCategories.map((cat: any) => {
      childIntrest.push(...cat?.subCategories);
    });
    setCategories(childIntrest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainCategory]);

  const onPressItem = (item: string) => {
    const isExist = mainCategory.includes(item);
    setSubCategories([]);
    if (isExist) {
      const updatedCategories = mainCategory.filter(
        (cat: string) => cat !== item,
      );
      setMainCategory([...updatedCategories]);
    } else if (mainCategory.length < 3) {
      setMainCategory([...mainCategory, item]);
    }
  };

  const onPressSubItem = (item: string) => {
    const isExist = subCategories.includes(item);

    if (isExist) {
      const updatedCategories = subCategories.filter(
        (cat: string) => cat !== item,
      );
      setSubCategories([...updatedCategories]);
    } else if (setSubCategories.length < 5) {
      setSubCategories([...subCategories, item]);
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
    <Modal animationType="slide" visible={addMainCategoryModalOpen} transparent>
      <View style={styles.mainCategoryModalContainer}>
        <View style={styles.cateInnerContainer}>
          <View style={styles.crossContainerAddMainCategory}>
            <View style={styles.emptyContainer}>
              <Text />
            </View>
            <TouchableOpacity
              style={styles.emptyContainer}
              onPress={() => {
                mainCategory !== '' && setMainCategoryError(false);
                setaddMainCategoryModalOpen(false);
              }}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.selectCategoryLabelContainer}>
            <Text style={styles.selectCategoryText}>Select Category</Text>
          </View>
          <Text style={[styles.intrestLabel]}>
            SELECT UMBRELLA CATEGORIES MAX 3
          </Text>
          <View>
            <View style={styles.tilesTopContainer}>
              {umbrellaCat?.map(
                ({ name, id }: { name: string; id: string }) => {
                  return (
                    <TouchableOpacity
                      key={name}
                      style={styles.categoryTile}
                      onPress={() => {
                        onPressItem(id);
                      }}>
                      {GetIcon(name, mainCategory.includes(id))}
                    </TouchableOpacity>
                  );
                },
              )}
            </View>
          </View>
          {mainCategory.length > 0 ? (
            <Text style={[styles.intrestLabel, { paddingVertical: 20 }]}>
              SELECT CATEGORIES MAX 5
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
                    {GetIcon(name, subCategories.includes(id))}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
