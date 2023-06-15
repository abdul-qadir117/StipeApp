import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import styles from './createGroup.styles';
import { Icons } from '../../../../assets/images/svgs';
import { Button, Input } from '../../../../components';

export const SocialModal = ({
  isSocialModalOpen,
  setIsSocialModalOpen,
  socialModalType,
  onChangeUrls,
  facebookUrl,
  instagramUrl,
  tickTokUrl,
  linkedinUrl,
  whatsappUrl,
}: any) => {
  return (
    <Modal animationType="slide" visible={isSocialModalOpen} transparent>
      <View style={styles.socialModelContainer}>
        <View style={styles.socialModalInnerContainer}>
          <View style={styles.crossContainer}>
            <TouchableOpacity onPress={() => setIsSocialModalOpen(false)}>
              <Icons.CrossIconCircular />
            </TouchableOpacity>
          </View>
          <View style={styles.removeCardBottomContainer}>
            <Text style={styles.socialLinkModalHeading}>Add Social Link</Text>
            <Input
              label={`Add ${
                socialModalType === 'Instagram'
                  ? 'Instagram Handle'
                  : socialModalType
              }`}
              inputStyles={styles.fullWidth1}
              onChange={text => onChangeUrls(text)}
              placeholder="Enter Here"
              value={
                socialModalType === 'Facebook'
                  ? facebookUrl
                  : socialModalType === 'Instagram'
                  ? instagramUrl
                  : socialModalType === 'Ticktok'
                  ? tickTokUrl
                  : socialModalType === 'LinkedIn'
                  ? linkedinUrl
                  : whatsappUrl
              }
            />
            <Button
              customStyle={styles.saveLinkButton}
              title="Save"
              onPress={() => setIsSocialModalOpen(false)}
            />
          </View>
        </View>
        <View style={styles.bottomSheetButtonContainer} />
      </View>
    </Modal>
  );
};
