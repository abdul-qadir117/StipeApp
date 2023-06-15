import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { Icons } from '../../assets/images/svgs';
import styles from './styles';
import colors from '../../utils/colors';
import { InfoModal } from '../InfoModal';

const LabelWithToggle = ({
  text,
  isEnabled,
  setIsEnabled,
  info = '',
  toggleDisable = false,
  infoDisabled = false,
}: {
  text: string;
  isEnabled?: boolean;
  setIsEnabled?: (value: boolean) => void;
  info?: string;
  toggleDisable?: boolean;
  iconDisbale?: boolean;
  infoDisabled?: boolean;
}) => {
  const [infoOpen, setInfoOpen] = useState(false);
  return (
    <View style={styles.renderToggleHeader}>
      <View style={styles.labelIconContainer}>
        <Text style={styles.label}>{text} </Text>
        <TouchableOpacity
          onPress={() => {
            setInfoOpen(true);
          }}>
          {!infoDisabled && <Icons.CircularWavyQuestionIcon />}
        </TouchableOpacity>
      </View>
      {!toggleDisable && (
        <Switch
          trackColor={{ false: '#767577', true: colors.primary }}
          thumbColor={isEnabled ? colors.textColor : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      )}

      {infoOpen && (
        <InfoModal
          isModalOpen={infoOpen}
          setIsModalOpen={setInfoOpen}
          heading={text}
          info={info}
        />
      )}
    </View>
  );
};

export default LabelWithToggle;
