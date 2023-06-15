import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { Icons } from '../../assets/images/svgs';

interface CardProps {
  imageSource: string;
  title: string;
  name: string;
  collegeName: string;
  email: string;
  phone: string;
}

const Card: React.FC<CardProps> = ({
  imageSource,
  title,
  name,
  collegeName,
  email,
  phone,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Icons.User height={14} width={14} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.detailText}>{name}</Text>
        <Text style={styles.collegeName}>{collegeName}</Text>
        <Text style={styles.email}>Email: {email}</Text>
        <Text style={styles.email}>Phone: {phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    height: 122,
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  image: {
    width: 108,
    height: 108,
    marginRight: 16,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9F9F9F',
    marginRight: 8,
    marginBottom: 4,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  detailText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',

    marginBottom: 5,
  },
  collegeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A3A3A3',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textColor,
    marginBottom: 4,
  },
});

export default Card;
