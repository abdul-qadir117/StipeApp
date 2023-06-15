import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, StatusBar } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';
import { Button } from '../../../../components';
import ImagePicker from 'react-native-image-crop-picker';
import {
  useGetUsersQuery,
  useGetSubCategoriesQuery,
  useLazyGetGroupQuery,
  useUpdateGroupMutation,
  usePostgroupMutation,
} from '../../../../services/modules/group.api';
import { CreateGroupHeader } from './CreateGroupHeader';
import { AddTeammateHeader } from './AddTeammateHeader';
import { StepOneStepper } from './StepOneStepper';
import { StepTwoStepper } from './StepTwoStepper';
import { StepThreeStepper } from './StepThreeStepper';
import { StepFourStepper } from './StepFourStepper';
import { StepOneBody } from './StepOneBody';
import { RemoveCardModel } from './RemoveCardModel';
import { RemovePhotoModel } from './RemovePhotoModal';
import { PublicPrivateInfoModel } from './PublicPrivateInfoModal';
import { AddLogoModal } from './AddLogoModal';
import { TeamInfoModal } from './TeamInfoModal';
import { SocialModal } from './SocialModal';
import { RemoveTeammateModal } from './RemoveTeammate';
import { AddMainCategory } from './AddMainCategoryModal';
import { StepTwoBody } from './StepTwoBody';
import { StepThreeBody } from './StepThreeBody';
import { StepFourBody } from './StepFourBody';
import { StepFiveBody } from './StepFiveBody';
import { AddTeammateBody } from './AddTeammateBody';
import useEffectAfterSuccess from '../../../../hooks/useEffectAfterSuccess';
import { SuccessModal } from './SuccessModal';
import { API_BASE_URL } from '@env';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserType } from '../../../../types/auth.types';
import { useAppSelector } from '../../../../hooks/redux';

const CreateGroup = ({ navigation, route }: any) => {
  const { user }: { user: UserType } = useAppSelector(state => state.auth);
  const [headerText, setHeaderText] = useState('Set Your Role');
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [roleError, setRoleError] = useState('');
  const [groupType, setGroupType] = useState('public');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isRemoveCardModelOpen, setIsRemoveCardModelOpen] = useState(false);
  const [isRemovePhotoOpen, setIsRemovePhotoOpen] = useState(false);
  const [isTeamInfoModalOpen, setIsTeamInfoModalOpen] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [socialModalType, setSocialModalType] = useState('facebook');
  const [isRemoveTeamateModalOpen, setIsRemoveTeamateModalOpen] =
    useState(false);

  const [teamateToRemove, setTeamateToRemove] = useState({});

  const [addLogoModalOpen, setaddLogoModalOpen] = useState(false);
  const [photo, setPhoto] = useState<any>('');
  const [photoIndex, setPhotoIndex] = useState<any>(0);
  const [addMainCategoryModalOpen, setaddMainCategoryModalOpen] =
    useState(false);

  const [mainCategory, setMainCategory] = useState<string[]>([]);
  const [photoCarousal, setPhotoCarousal] = useState<any>([
    ...new Array(5).keys(),
  ]);
  const [name, setName] = useState<any>('');
  const [description, setDescription] = useState<any>('');
  const [allUsers, setAllUsers] = useState<any>([]);
  const [selectedUsers, setSelectedUsers] = useState<any>([]);

  const [isPreview, setIsPreview] = useState<any>(false);
  const [nameError, setNameError] = useState<any>(false);
  const [descriptionError, setDescriptionError] = useState<any>(false);
  const [mainCategoryError, setMainCategoryError] = useState<any>(false);
  const [subCategoryError, setSubCategoryError] = useState<any>(false);
  const [teamError, setTeamError] = useState<any>(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [facebookUrl, setFacebookUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [tickTokUrl, setTickTokUrl] = useState('');
  const [linkedinUrl, setLinkedInUrl] = useState('');
  const [whatsappUrl, setWhatsappInUrl] = useState('');
  const [imagesCarousal, setImages] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [successModalOpen, setSuccessModalOpen] = useState<any>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  const [getGroup, { data: groupData, isSuccess: isGroupDataSuccess }] =
    useLazyGetGroupQuery();

  const [postGroup, { isSuccess, isLoading, error }] = usePostgroupMutation();
  const width = Dimensions.get('window').width;
  const { data: users } = useGetUsersQuery(keyword);
  const { data: subCategoriesList } = useGetSubCategoriesQuery({});

  const [updateGruop, { isSuccess: isSuccessUpdateGroup }] =
    useUpdateGroupMutation();

  useEffectAfterSuccess(() => {
    navigation.goBack();
  }, isSuccessUpdateGroup);

  useEffectAfterSuccess(() => {
    if (groupData) {
      setName(groupData?.name);
      setDescription(groupData?.description);
      let images: any = [];
      groupData?.groupPics.map((item: any) => {
        images.push({
          uri: `${API_BASE_URL}/${item.group_image}`,
        });
      });
      let prevSubCategories = subCategoriesList?.data;
      let updatedData: any = [];
      prevSubCategories?.map((item: any) => {
        updatedData.push({
          isSelected: false,
          ...item,
        });
      });
      setSubCategories(updatedData);
      setPhotoCarousal(images);
      updateCarousal();
    }
  }, isGroupDataSuccess);

  useEffect(() => {
    if (route?.params?.groupid) {
      setIsEdit(route?.params?.edit);
      setToggleCheckBox(true);
      getGroup(route?.params?.groupid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  useEffect(() => {
    if (step === 5 || step === 6) {
      var filterArray = allUsers.filter(
        (data: any) => data.isSelected === true,
      );
    }
    setSelectedUsers(filterArray);
  }, [allUsers, step]);

  useEffect(() => {
    let newUser: any = [];
    users?.data?.map((item: any) => {
      newUser.push({
        ...item,
        isSelected: false,
      });
    });
    setAllUsers(newUser);
  }, [users]);

  const onPressUnselectTeamate = () => {
    let userToModify: any = teamateToRemove;
    userToModify.isSelected = false;
    let selectedid = userToModify?.id;
    let selectedIndex = selectedUsers.findIndex(
      (x: any) => x.id === selectedid,
    );
    let prevSelectedusers = selectedUsers;
    prevSelectedusers.splice(selectedIndex, 1);
    setSelectedUsers(prevSelectedusers);
    setIsRemoveTeamateModalOpen(false);
    setTeamateToRemove({});
    updateCarousal();
  };

  function useUpdateCarousal() {
    const [value, setValue] = useState(0);
    return () => setValue((val: any) => val + 1);
  }

  const updateCarousal = useUpdateCarousal();

  function onPressTakePhoto() {
    ImagePicker.openCamera({
      includeBase64: true,
      cropping: true,
      mediaType: 'photo',
    })
      .then(res => {
        setaddLogoModalOpen(false);
        const imageData = {
          uri: `data:${res.mime};base64,${res.data}`,
        };
        if (step === 5) {
          let images = photoCarousal;
          if (images.length <= 5) {
            images[photoIndex] = imageData;
            setPhotoCarousal(images);
            let prevImages = imagesCarousal;
            let imagesToSave = {
              uri: `data:${res.mime};base64,${res.data}`,
              ...res,
            };
            delete res.data;
            prevImages.push(imagesToSave);
            setImages(prevImages);
            updateCarousal();
          }
        } else {
          setPhoto(imageData);
        }
      })
      .catch(e => console.log('Error', e));
  }

  function onPressChoosePhoto() {
    ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      compressImageQuality: 0.5,
      includeBase64: true,
      cropping: true,
    })
      .then(res => {
        setaddLogoModalOpen(false);
        const imageData = {
          uri: `data:${res.mime};base64,${res.data}`,
        };
        if (step === 5) {
          let images = photoCarousal;
          if (images.length <= 5) {
            images[photoIndex] = imageData;
            updateCarousal();
          }
        } else {
          setPhoto(imageData);
        }
      })
      .catch(e => console.log('Error', e));
  }

  const onPressPreview = () => {
    if (name === '') {
      setNameError(true);
    } else if (name !== '') {
      setNameError(false);
    }

    if (mainCategory.length === 0) {
      setMainCategoryError(true);
    } else if (mainCategory.length > 0) {
      setMainCategoryError(false);
    }

    if (subCategories?.length === 0) {
      setSubCategoryError(true);
    } else if (subCategories?.length > 0) {
      setSubCategoryError(false);
    }

    if (description === '') {
      setDescriptionError(true);
    } else if (description !== '') {
      setDescriptionError(false);
    }

    if (selectedUsers.length === 0) {
      setTeamError(true);
    } else if (selectedUsers.length > 0) {
      setTeamError(false);
    }

    if (
      name !== '' &&
      description !== '' &&
      mainCategory.length &&
      subCategories?.length > 0 &&
      selectedUsers.length > 0
    ) {
      setIsPreview(true);
    }
  };
  const onPressNext = () => {
    if (step === 1) {
      if (role === '') {
        setRoleError('Role title is required!');
      } else {
        setStep(2);
        setHeaderText('Privacy');
      }
    } else if (step === 2) {
      setStep(3);
      setHeaderText('Connect Your Bank Account');
    } else if (step === 3) {
      setStep(4);
      setHeaderText('Group Logo');
    } else if (step === 4) {
      setStep(5);
      setHeaderText('Group Logo');
    } else if (step === 6) {
      setStep(5);
    } else if (step === 5) {
    }
  };

  const onPressBack = () => {
    if (step === 1) {
      navigation.goBack();
    } else if (step === 2) {
      setHeaderText('Set Your Role');
      setStep(1);
    } else if (step === 3) {
      setHeaderText('Privacy');
      setStep(2);
    } else if (step === 4) {
      setStep(3);
      setHeaderText('Connect Your Bank Account');
    }
  };

  const renderImageView = (image: any, onPress: any) => {
    if (image.uri) {
      return <Image source={image} style={styles.carousalImage} />;
    } else {
      return (
        <View style={styles.carousalItemInner}>
          <TouchableOpacity onPress={onPress}>
            <View style={{ marginLeft: 40 }}>
              <Icons.AddImage />
            </View>
            <Text style={styles.addPhotosText}>Add Photo</Text>
            <Text style={styles.addPhotosDSubText}>You can add upto 5</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const onPressItem = (item: any, index: any) => {
    let prevState = item.isSelected;
    let prevUsers = allUsers;
    item.isSelected = !prevState;
    prevUsers[index] = item;
    setAllUsers(prevUsers);
    setTeamError(false);
    updateCarousal();
  };

  useEffectAfterSuccess(() => {
    setSuccessModalOpen(true);
  }, isSuccess);

  const onPressPublish = () => {
    if (isPreview) {
      if (isEdit) {
        let bodyImages: any = [];
        photoCarousal.map((item: any) => {
          bodyImages.push({
            uri: item.uri,
            name: 'fileName.png',
            type: 'image/png',
          });
        });
        let subCatIds: any = [];
        subCategories.map((item: any) => {
          subCatIds.push(item);
        });
        let usersArr: any = [];
        selectedUsers.map((item: any) => {
          item.isSelected && usersArr.push({ user_id: item.id, role: 'admin' });
        });

        let body = {
          name: name,
          description: description,
          groupImages: JSON.stringify(bodyImages),
          subCats: JSON.stringify(subCatIds),
          users: JSON.stringify(usersArr),
        };
        updateGruop({ id: route.params.groupid, body: body });
      }
      if (!isEdit) {
        const formData: any = new FormData();
        // formData.append('groupImages', {})
        if (photo !== '') {
          formData.append('groupImages', {
            uri: photo?.uri,
            name: 'logo.png',
            type: 'image/png',
          });
        }
        photoCarousal.map((item: any) => {
          formData.append('groupImages', {
            uri: item.uri,
            name: 'fileName.png',
            type: 'image/png',
          });
        });
        formData.append(
          'users',
          JSON.stringify({ user_id: user.id, role: role }),
        );
        selectedUsers.map((item: any) => {
          item.isSelected &&
            formData.append(
              'users',
              JSON.stringify({ user_id: item.id, role: 'admin' }),
            );
        });

        formData.append('name', name);
        formData.append('is_private', groupType === 'public' ? 0 : 1);
        formData.append('description', description);
        mainCategory.map((item: any) => {
          formData.append('subCats', item);
        });
        subCategories.map((item: any) => {
          formData.append('subCats', item);
        });
        formData.append('website_url', facebookUrl);
        formData.append('instagram_url', instagramUrl);
        formData.append('tiktok_url', tickTokUrl);
        postGroup(formData);
      }
    }
  };

  const onChangeUrls = (text: any) => {
    if (socialModalType === 'Facebook') {
      setFacebookUrl(text);
    } else if (socialModalType === 'Instagram') {
      setInstagramUrl(text);
    } else if (socialModalType === 'Ticktok') {
      setTickTokUrl(text);
    } else if (socialModalType === 'LinkenIn') {
      setLinkedInUrl(text);
    } else if (socialModalType === 'Whatsapp') {
      setWhatsappInUrl(text);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={'white'}
      />
      {step !== 5 && step !== 6 && (
        <CreateGroupHeader onPressBack={onPressBack} headerText={headerText} />
      )}
      {step === 6 && (
        <AddTeammateHeader
          setKeyword={setKeyword}
          keyword={keyword}
          setStep={setStep}
          role={role}
          setRole={setRole}
        />
      )}
      <View>
        {step === 1 && <StepOneStepper />}
        {step === 2 && <StepTwoStepper />}
        {step === 3 && <StepThreeStepper />}
        {step === 4 && <StepFourStepper />}
      </View>
      {step === 1 && (
        <StepOneBody
          role={role}
          setRole={(rol: string) => {
            setRole(rol);
            setRoleError('');
          }}
          error={roleError}
        />
      )}
      <RemoveCardModel
        isRemoveCardModelOpen={isRemoveCardModelOpen}
        setIsRemoveCardModelOpen={setIsRemoveCardModelOpen}
      />
      <RemovePhotoModel
        isRemovePhotoOpen={isRemovePhotoOpen}
        setIsRemovePhotoOpen={setIsRemovePhotoOpen}
        setPhoto={setPhoto}
      />
      <PublicPrivateInfoModel
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      />
      <AddLogoModal
        addLogoModalOpen={addLogoModalOpen}
        setaddLogoModalOpen={setaddLogoModalOpen}
        step={step}
        onPressTakePhoto={onPressTakePhoto}
        onPressChoosePhoto={onPressChoosePhoto}
      />
      <TeamInfoModal
        isTeamInfoModalOpen={isTeamInfoModalOpen}
        setIsTeamInfoModalOpen={setIsTeamInfoModalOpen}
      />
      <SocialModal
        isSocialModalOpen={isSocialModalOpen}
        setIsSocialModalOpen={setIsSocialModalOpen}
        socialModalType={socialModalType}
        onChangeUrls={onChangeUrls}
        facebookUrl={facebookUrl}
        instagramUrl={instagramUrl}
        tickTokUrl={tickTokUrl}
        linkedinUrl={linkedinUrl}
        whatsappUrl={whatsappUrl}
      />
      <RemoveTeammateModal
        isRemoveTeamateModalOpen={isRemoveTeamateModalOpen}
        setIsRemoveTeamateModalOpen={setIsRemoveTeamateModalOpen}
        onPressUnselectTeamate={onPressUnselectTeamate}
      />
      <AddMainCategory
        addMainCategoryModalOpen={addMainCategoryModalOpen}
        mainCategory={mainCategory}
        setMainCategory={setMainCategory}
        setMainCategoryError={setMainCategoryError}
        setaddMainCategoryModalOpen={setaddMainCategoryModalOpen}
        subCategories={subCategories}
        setSubCategories={setSubCategories}
      />

      <SuccessModal
        isSuccessModalOpen={successModalOpen}
        setIsSuccessOpen={setSuccessModalOpen}
        navigation={navigation}
      />
      {step === 2 && (
        <StepTwoBody
          groupType={groupType}
          setGroupType={setGroupType}
          setIsModelOpen={setIsModelOpen}
        />
      )}
      {step === 3 && (
        <StepThreeBody
          setGroupType={setGroupType}
          setIsRemoveCardModelOpen={setIsRemoveCardModelOpen}
        />
      )}
      {step === 4 && (
        <StepFourBody
          setaddLogoModalOpen={setaddLogoModalOpen}
          photo={photo}
          setIsRemovePhotoOpen={setIsRemovePhotoOpen}
        />
      )}
      {step === 5 && (
        <StepFiveBody
          setaddLogoModalOpen={setaddLogoModalOpen}
          isPreview={isPreview}
          width={width}
          photoCarousal={photoCarousal}
          setPhotoIndex={setPhotoIndex}
          renderImageView={renderImageView}
          setName={setName}
          setNameError={setNameError}
          name={name}
          setMainCategory={setMainCategory}
          nameError={nameError}
          description={description}
          setDescription={setDescription}
          setDescriptionError={setDescriptionError}
          descriptionError={descriptionError}
          mainCategory={mainCategory}
          mainCategoryError={mainCategoryError}
          setaddMainCategoryModalOpen={setaddMainCategoryModalOpen}
          subCategories={subCategories}
          subCategoryError={subCategoryError}
          setSocialModalType={setSocialModalType}
          setIsSocialModalOpen={setIsSocialModalOpen}
          setIsTeamInfoModalOpen={setIsTeamInfoModalOpen}
          setStep={setStep}
          teamError={teamError}
          selectedUsers={selectedUsers}
          setIsRemoveTeamateModalOpen={setIsRemoveTeamateModalOpen}
          setTeamateToRemove={setTeamateToRemove}
          toggleCheckBox={toggleCheckBox}
          setToggleCheckBox={setToggleCheckBox}
          navigation={navigation}
          facebookUrl={facebookUrl}
          instagramUrl={instagramUrl}
          tickTokUrl={tickTokUrl}
          linkedinUrl={linkedinUrl}
          whatsappUrl={whatsappUrl}
        />
      )}
      {step === 6 && (
        <AddTeammateBody allUsers={allUsers} onPressItem={onPressItem} />
      )}
      <SafeAreaView>
        <View style={styles.buttonContainer}>
          {step !== 4 && step !== 5 && step !== 3 && (
            <Button
              title={step === 5 ? 'Preview' : 'Next'}
              onPress={onPressNext}
            />
          )}
          {step === 5 && !isPreview && (
            <Button title={'Preview'} onPress={onPressPreview} />
          )}
          {step === 5 && isPreview && (
            <View style={styles.previewButtonsContainer}>
              <Button
                customStyle={styles.previewEditButton}
                title={'Edit'}
                onPress={() => {
                  setIsPreview(false);
                }}
              />
              <Button
                customStyle={
                  toggleCheckBox
                    ? styles.previewPublishButton
                    : styles.previewPublishButtonDisabled
                }
                title={isEdit ? 'Save Changes' : 'Publish'}
                loading={isLoading}
                onPress={() => {
                  toggleCheckBox && onPressPublish();
                }}
              />
            </View>
          )}
          {step === 3 && <Button title={'Skip'} onPress={onPressNext} />}
          {step === 4 && (
            <Button
              title={photo === '' ? 'Skip' : 'Next'}
              onPress={onPressNext}
            />
          )}
          {step !== 1 && step !== 6 && step !== 5 && (
            <Button
              customStyle={styles.cancelButton}
              title="Close"
              textStyle={{ textDecorationLine: 'underline' }}
              onPress={() => navigation.goBack()}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateGroup;
