import React from 'react';
import { Text, Modal, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';

export const AddSubCategoryModal = ({
  addSubCategoryModalOpen,
  selectedSubCategories,
  setSubCategoryError,
  setSubMainCategoryModalOpen,
  subCategories,
  onSelectSubCategory,
}: any) => {
  return (
    <Modal animationType="slide" visible={addSubCategoryModalOpen} transparent>
      <View style={styles.mainCategoryModalContainer}>
        <View style={styles.mainCategoryModalInnerContainer}>
          <View style={styles.crossContainerAddMainCategory}>
            <View style={styles.emptyContainer}>
              <Text />
            </View>
            <View style={styles.selectCategoryLabelContainer}>
              <Text style={styles.selectCategoryText}>Select Category</Text>
              <Text style={styles.addMainCategoryHeaderSubText}>
                Select Sub Categories Max 3
              </Text>
            </View>
            <TouchableOpacity
              style={styles.emptyContainer}
              onPress={() => {
                selectedSubCategories.length > 0 && setSubCategoryError(false);
                setSubMainCategoryModalOpen(false);
              }}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.addMainCategoryBottomContainer}>
            <View style={styles.subcategoriesContainer}>
              <FlatList
                data={subCategories}
                contentContainerStyle={styles.subCategoryFlatlist}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      onSelectSubCategory(item, index);
                    }}
                    style={
                      item.isSelected
                        ? styles.subCategoryTileSelected
                        : styles.subCategoryTile
                    }>
                    <Text style={styles.mainCategoryTileText}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                )}
                //Setting the number of column
                numColumns={2}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomSheetButtonContainer} />
      </View>
    </Modal>
  );
};
