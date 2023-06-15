import React from 'react';
import {
  ScrollView,
  Dimensions,
  Image,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './view.styles';
import Carousel from 'react-native-reanimated-carousel';
import { useGetGroupQuery } from '../../services/modules/group.api';
import colors from '../../utils/colors';
import { HeadingCustom } from './components/Heading';
import { Icons } from '../../assets/images/svgs';
import Button from '../../components/Button';
import EventsAndFroums from './components/EventsAndFroums';
import { useLazyFollowGroupQuery } from '../../services/modules/group.api';
import { useAppSelector } from '../../hooks/redux';
import { UserType } from '../../types/auth.types';
import useEffectAfterSuccess from '../../hooks/useEffectAfterSuccess';
const width = Dimensions.get('window').width;

export const ViewGroup = ({ route }: any) => {
  const { user: CurrentUser }: { user: UserType } = useAppSelector(
    state => state.auth,
  );
  const {
    data: groupData,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useGetGroupQuery(route?.params?.id, {
    skip: !route?.params?.id,
  });

  const [
    followGroup,
    { isLoading: followLoading, isSuccess: onFollowSuccess },
  ] = useLazyFollowGroupQuery();

  useEffectAfterSuccess(() => {
    refetch();
  }, onFollowSuccess);

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Something went wrong!</Text>
      </View>
    );
  }

  const mainCategory = isSuccess
    ? groupData?.groupSubcat[0]?.subCategory?.category?.name
    : '';

  const isFollowed = isSuccess
    ? groupData?.groupFollowers?.some(
        ({ user_id }: { user_id: number | string }) =>
          user_id === CurrentUser.id,
      )
    : false;

  return (
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      {isLoading ? (
        <ActivityIndicator color={colors.textColor} />
      ) : (
        <>
          <Carousel
            width={width}
            height={width / 1.2}
            style={styles.carousal}
            data={groupData?.groupPics}
            loop
            renderItem={({
              item,
              index,
            }: {
              item: { groupImage: string };
              index: number;
            }) => {
              const { groupImage } = item;
              return (
                <Image
                  key={index}
                  source={{
                    uri: groupImage,
                  }}
                  style={styles.carousalImage}
                />
              );
            }}
          />

          <Text style={styles.name}>{groupData?.name}</Text>
          <Text numberOfLines={3} style={styles.previewDescription}>
            {groupData?.description}
          </Text>
          <HeadingCustom text={'Main Category'} />
          <View style={styles.categoryContainer}>
            <View style={styles.categoryTitleContainer}>
              <Text style={styles.categoryTileText}>
                {mainCategory === 'community'
                  ? '🧑‍🤝‍🧑 Community'
                  : mainCategory === 'bodyandmind'
                  ? '🧠️  Body + Mind'
                  : mainCategory === 'change'
                  ? '🔃️  Change'
                  : mainCategory === 'learn'
                  ? '📚  Learn'
                  : mainCategory === 'goout'
                  ? '🎭  Go out'
                  : mainCategory === 'hobbies'
                  ? '🎻 Hobbies'
                  : '🎻 Music'}
              </Text>
            </View>
          </View>
          <HeadingCustom text={'Sub Categories'} />
          <View style={styles.categoryContainer}>
            {groupData?.groupSubcat?.map(
              ({
                id,
                subCategory,
              }: {
                id: number | string;
                subCategory: { name: string };
              }) => {
                return (
                  <View key={id} style={styles.subCategoryTitleList}>
                    <Text style={styles.categoryTileText}>
                      {subCategory?.name}
                    </Text>
                  </View>
                );
              },
            )}
          </View>
          <HeadingCustom text={'Followers'} />
          {groupData?.groupFollowers.length > 0 ? (
            <View style={styles.categoryContainer}>
              {groupData?.groupFollowers
                ?.slice(0, 3)
                ?.map(({ id }: { id: number | string }, index: number) => {
                  return (
                    <View key={id} style={styles.followUserContainer}>
                      <View
                        style={[
                          styles.followUser,
                          index !== 0 && { left: index * 40 },
                        ]}>
                        {index < 2 ? (
                          <Icons.TeamateItem height={50} width={50} />
                        ) : (
                          <View style={styles.followNubmerContainer}>
                            <Text style={styles.followNubmer}>
                              {groupData?.groupFollowers?.length}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  );
                })}
            </View>
          ) : (
            <View style={styles.categoryContainer}>
              <Text style={styles.noFollowers}>0 Follower</Text>
            </View>
          )}

          <HeadingCustom text={'Socails'} />
          <View style={styles.socialContainer}>
            {groupData?.facebook_url && groupData?.facebook_url !== null && (
              <TouchableOpacity onPress={() => {}}>
                <Icons.FacebookActive style={styles.socialIcons} />
              </TouchableOpacity>
            )}
            {groupData?.instagram_url !== null && (
              <TouchableOpacity onPress={() => {}}>
                <Icons.InstagramActive style={styles.socialIcons} />
              </TouchableOpacity>
            )}
            {groupData?.tiktok_url !== null && (
              <TouchableOpacity onPress={() => {}}>
                <Icons.TictokInactive style={styles.socialIcons} />
              </TouchableOpacity>
            )}
            {groupData?.linkedin_url !== null && (
              <TouchableOpacity onPress={() => {}}>
                <Icons.LinkedinInactive style={styles.socialIcons} />
              </TouchableOpacity>
            )}

            {groupData?.whatsapp_number !== null && (
              <TouchableOpacity onPress={() => {}}>
                <Icons.WhatsappInactive style={styles.socialIcons} />
              </TouchableOpacity>
            )}
          </View>
          <Button
            title={isFollowed ? 'Following' : 'Follow'}
            onPress={() => {
              followGroup(route?.params?.id);
            }}
            disabled={isFollowed}
            customStyle={styles.followButton}
            loading={followLoading}
          />
          <View style={styles.teamContainer}>
            <HeadingCustom text={'Teams'} />
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            nestedScrollEnabled
            horizontal
            contentContainerStyle={styles.teamsList}>
            {groupData?.groupTeam?.map(
              ({
                user,
                id,
              }: {
                id: string;
                user: { firstName: string; lastName: string; role: string };
              }) => {
                return (
                  <View key={id} style={styles.teamatesListContainer}>
                    <Icons.TeamateItem height={90} width={90} />
                    <Text style={styles.teamMemberName}>
                      {user?.firstName} {user.lastName}
                    </Text>
                    <Text style={styles.teamMemberRole}>{user?.role}</Text>
                  </View>
                );
              },
            )}
          </ScrollView>
          <EventsAndFroums isPrivate={groupData?.is_private === 0 ?? false} />
        </>
      )}
    </ScrollView>
  );
};
