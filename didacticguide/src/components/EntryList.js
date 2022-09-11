import React from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';

import EntryCard from './EntryCard';

const EntryList = ({entryList, refreshing, onRefresh}) => {
  return (
    <View style={styles.entryView}>
      {entryList && (
        <FlatList
          style={styles.entryList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item) => item.id}
          data={entryList}
          renderItem={({item}) => {
            return (
              <EntryCard
                entryName={item.title}
                entryBody={item.body}
                
              />
              
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 15,
  },
  entryText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  entryView: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryList: {
    padding: 5,
    marginBottom: 20,
  },
});
export default EntryList;