import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Tag.styles';

interface TagProps {
  title: string;
  iconSource: number;
}

const SingleTag = ({ title, iconSource }: TagProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBtnInnerContainer}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={[styles.title]}>{title}</Text>
      </View>
    </View>
  );
};

export default SingleTag;
