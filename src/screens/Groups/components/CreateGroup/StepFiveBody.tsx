import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './createGroup.styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icons } from '../../../../assets/images/svgs';
import Carousel from 'react-native-reanimated-carousel';
import { Input } from '../../../../components';
import OutlinedButtonWithIcon from '../../../../components/Button/OutlinedButtonWithIcon';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../../utils/colors';
import { HeadingCustom } from '../Heading';
import CategoryPicker from '../../../../components/CategorySelector';
import SubCategoryPicker from '../../../../components/CategorySelector/SubCategoryPicker';

export const StepFiveBody = ({
  setaddLogoModalOpen,
  isPreview,
  width,
  photoCarousal,
  setPhotoIndex,
  renderImageView,
  setName,
  setNameError,
  name,
  nameError,
  description,
  setDescription,
  setDescriptionError,
  descriptionError,
  mainCategory,
  mainCategoryError,
  setaddMainCategoryModalOpen,
  subCategories,
  subCategoryError,
  setSocialModalType,
  setIsSocialModalOpen,
  setIsTeamInfoModalOpen,
  setStep,
  teamError,
  selectedUsers,
  setIsRemoveTeamateModalOpen,
  setTeamateToRemove,
  toggleCheckBox,
  setToggleCheckBox,
  navigation,
  facebookUrl,
  instagramUrl,
  tickTokUrl,
  linkedinUrl,
  whatsappUrl,
}: any) => {
  console.log(isPreview);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={
        isPreview ? styles.stepFiveContainerPreview : styles.stepFiveContainer
      }
      nestedScrollEnabled>
      <Carousel
        width={width}
        height={width / 0.9}
        data={photoCarousal}
        renderItem={({ item, index }) => (
          <View style={styles.carousalItem}>
            {renderImageView(item, () => {
              setaddLogoModalOpen(true);
              setPhotoIndex(index);
            })}
          </View>
        )}
      />
      {!isPreview && (
        <HeadingCustom
          text="Name"
          marginReset={true}
          customStyle={customStyle.marginTop}
        />
      )}
      {!isPreview && (
        <Input
          onChange={text => {
            setName(text);
            setNameError(false);
          }}
          placeholder="Enter Here"
          value={name}
          inputStyles={[styles.fullWidth, nameError && styles.errorInput]}
        />
      )}
      {isPreview && <Text style={styles.previewName}>{name}</Text>}
      {isPreview && (
        <Text numberOfLines={3} style={styles.previewDescription}>
          {description}
        </Text>
      )}
      {!isPreview && <HeadingCustom text="Description" marginReset={true} />}
      {!isPreview && (
        <Input
          onChange={text => {
            setDescription(text);
            setDescriptionError(false);
          }}
          placeholder="Enter Here"
          value={description}
          numberOfLines={3}
          containerStyles={customStyle.marginBottom}
          inputStyles={[
            styles.fullWidth,
            descriptionError
              ? styles.descriptionErrorStyles
              : styles.descriptionStyles,
          ]}
        />
      )}

      {mainCategory.length > 0 && (
        <View style={styles.mainCategorySelectedHeader}>
          <View style={styles.mainCategorySelectedEditHeader}>
            <HeadingCustom text="Umbrella Category" />
            {!isPreview && (
              <TouchableOpacity
                onPress={() => setaddMainCategoryModalOpen(true)}
                style={styles.mainCategoryEditLeftContainer}>
                <Icons.EventAddIcon />
                <Text style={styles.addText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
      {mainCategory.length > 0 && <CategoryPicker categories={mainCategory} />}
      {mainCategoryError && (
        <Text style={styles.errorText}>
          Select Alteast One Umbrella Category
        </Text>
      )}
      {mainCategory.length > 0 && (
        <View style={styles.mainCategorySelectedHeader}>
          <View style={styles.mainCategorySelectedEditHeader}>
            <HeadingCustom text="Categories" />
            {!isPreview && (
              <TouchableOpacity
                onPress={() => setaddMainCategoryModalOpen(true)}
                style={styles.mainCategoryEditLeftContainer}>
                <Icons.EventAddIcon />
                <Text style={styles.addText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}

      {subCategoryError && (
        <Text style={styles.errorText}>Select Alteast One Category</Text>
      )}

      {mainCategory.length === 0 && (
        <>
          <HeadingCustom text="Categories" />
          <OutlinedButtonWithIcon
            title="Add Categories"
            onPress={() => {
              setaddMainCategoryModalOpen(true);
            }}
            customStyle={styles.fullWidthPurple}
          />
        </>
      )}

      {subCategories.length > 0 && (
        <SubCategoryPicker categories={subCategories} />
      )}

      <View style={styles.socialHeaderContainer}>
        <HeadingCustom text="Socials" />
      </View>
      <View style={styles.bottomContainer}>
        {
          <TouchableOpacity
            disabled={isPreview}
            onPress={() => {
              setSocialModalType('Instagram');
              setIsSocialModalOpen(true);
            }}>
            {instagramUrl !== '' ? (
              <Icons.InstagramActive style={styles.icons} />
            ) : (
              <Icons.AddInsta style={styles.icons} />
            )}
          </TouchableOpacity>
        }
        {
          <TouchableOpacity
            disabled={isPreview}
            onPress={() => {
              setSocialModalType('Facebook');
              setIsSocialModalOpen(true);
            }}>
            {facebookUrl !== '' ? (
              <Icons.FacebookActive style={styles.icons} />
            ) : (
              <Icons.AddFacebook style={styles.icons} fill="red" />
            )}
          </TouchableOpacity>
        }

        {
          <TouchableOpacity
            disabled={isPreview}
            onPress={() => {
              setSocialModalType('Ticktok');
              setIsSocialModalOpen(true);
            }}>
            {tickTokUrl !== '' ? (
              <Icons.TictokInactive style={styles.icons} />
            ) : (
              <Icons.AddTiktok style={styles.icons} />
            )}
          </TouchableOpacity>
        }
        {
          <TouchableOpacity
            disabled={isPreview}
            onPress={() => {
              setSocialModalType('LinkenIn');
              setIsSocialModalOpen(true);
            }}>
            {linkedinUrl !== '' ? (
              <Icons.LinkedinInactive style={styles.icons} />
            ) : (
              <Icons.AddLinkdin style={styles.icons} />
            )}
          </TouchableOpacity>
        }
        {
          <TouchableOpacity
            disabled={isPreview}
            onPress={() => {
              setSocialModalType('Whatsapp');
              setIsSocialModalOpen(true);
            }}>
            {whatsappUrl !== '' ? (
              <Icons.WhatsappInactive style={styles.icons} />
            ) : (
              <Icons.AddWhatsapp style={styles.icons} />
            )}
          </TouchableOpacity>
        }
      </View>
      <View style={styles.grouplistTitleContainer}>
        <TouchableOpacity
          onPress={() => setIsTeamInfoModalOpen(true)}
          disabled={isPreview}
          style={
            isPreview
              ? styles.teamLabelWithInfoMarkContainerPreview
              : styles.teamLabelWithInfoMarkContainer
          }>
          <HeadingCustom text="Teams" />
          {!isPreview && (
            <Icons.CircularWavyQuestionIcon style={styles.questionIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isPreview}
          onPress={() => setStep(6)}
          style={styles.eventListHeaderLeftRow}>
          {!isPreview && <Icons.EventAddIcon />}
          {!isPreview && <Text style={styles.addText}>Add</Text>}
          {!isPreview && <Text style={styles.seeAllText}>| See all</Text>}
        </TouchableOpacity>
      </View>
      {teamError && (
        <Text style={styles.errorText}>Add Atleast One Teamate</Text>
      )}

      <ScrollView
        nestedScrollEnabled
        horizontal
        contentContainerStyle={
          isPreview ? styles.teamsListPreview : styles.teamsList
        }>
        {selectedUsers?.map((item: any, index: number) => {
          return (
            <View key={index} style={styles.stepfiveTeamatesListContainer}>
              <View style={styles.crossIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setIsRemoveTeamateModalOpen(true);
                    setTeamateToRemove(item);
                  }}>
                  <Icons.Remove
                    width={30}
                    height={30}
                    style={styles.removeIcon}
                  />
                </TouchableOpacity>
              </View>
              <Icons.TeamateItem />
              <Text style={styles.addTeamitemNameStepFive}>
                {item?.firstName}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      {isPreview && (
        <View style={customStyle.container}>
          <CheckBox
            disabled={false}
            boxType="square"
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColor={colors.primary}
            onCheckColor={colors.textColor}
            onFillColor={colors.primary}
            onTintColor={colors.primary}
            style={customStyle.checkboxStyle}
          />
          <Text style={customStyle.margin}>I have read and agree to the </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GroupTerms');
            }}>
            <Text style={customStyle.textDecorate}>Terms and Conditions</Text>
          </TouchableOpacity>
          <Text style={customStyle.marginleft}> and</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GroupPrivacy');
            }}>
            <Text style={customStyle.privacy}> Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

const customStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  margin: { color: 'white', paddingLeft: 10 },
  marginleft: { color: 'white', paddingLeft: 25 },
  privacy: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  white: { color: 'white' },
  textDecorate: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  checkboxStyle: {
    height: 20,
    width: 20,
  },
  marginBottom: { marginBottom: 0 },
  marginTop: { marginTop: 15 },
});
