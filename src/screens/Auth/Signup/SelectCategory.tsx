import React, { useState } from 'react';
import { AuthLayout } from '../../../components';
import Dropdown from '../../../components/Dropdown';
import { useGetCategoriesQuery } from '../../../services/modules/auth.api';
import { useUserUpdateMutation } from '../../../services/modules/user.api';
import useEffectAfterSuccess from '../../../hooks/useEffectAfterSuccess';

const CategorySelection = ({ navigation }: any) => {
  const [category, setCategory] = useState<string>('');
  const [updateUser, { isSuccess, isLoading }] = useUserUpdateMutation();

  const [keyword, setKeyword] = useState<string>('');
  const { data } = useGetCategoriesQuery<any>(keyword);

  useEffectAfterSuccess(() => {
    navigation.navigate('signup/privacy');
  }, isSuccess);

  const onSubmit = () => {
    if (category === '') {
      navigation.navigate('signup/privacy');
    } else {
      updateUser({
        body: {
          category: category,
        },
      });
    }
  };

  const onSearch = (word: string) => setKeyword(word);

  return (
    <AuthLayout
      title="Add an “I am”"
      subTitle="Post your skills and talents. Say you’re a guitarist who might want to join a band, or play at a gig, or a graphic designer who could do marketing for a Society, this allows other students to find you!"
      btnTitle={category === '' ? 'Next' : 'Save'}
      onBtnPress={onSubmit}
      isSkipButtonRequired={true}
      btnLoading={isLoading}>
      <Dropdown
        label="What category?"
        data={data?.data}
        onSearch={onSearch}
        onChange={(value: any) => {
          setCategory(value?.name);
        }}
        placeholder={'Choose your category'}
      />
    </AuthLayout>
  );
};

export default CategorySelection;
