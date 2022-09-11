import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card, Icon, Image} from 'react-native-elements';

const EntryCard = ({
  entryName,
  entryBody,
}) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.cardTitle}>{entryName}</Card.Title>
      <Card.Divider />
      <Text style={styles.productPrice}>{entryBody}$</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bodyText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  altView: {
    width: 200,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 20,
  },
  ownerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default EntryCard;