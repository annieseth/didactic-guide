import React, {useEffect, useState} from 'react';
import {API} from 'aws-amplify';
import {SafeAreaView, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';

import {listEntries} from '../../queries';
import EntryList from '../components/EntryList';
import { Text } from 'react-native-elements';
const HomeScreen = (props) => {
  const [entriesList, setEntries] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEntries = async () => {
    //try {
      const allEntries = await API.graphql({query: listEntries, authMode: "AMAZON_COGNITO_USER_POOLS"});
      if (allEntries.data.listEntries) {
        console.log('Diary Entries: \n');
        console.log(allEntries);
        setEntries(allEntries.data.listEntries.items);
      }
      Promise.resolve();

    //} catch (e) {
    //  console.log(e.message);
    //}
  };
  useEffect(() => {
    fetchEntries();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchEntries();
    setRefreshing(false);
  };
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <Text style={styles.titleText}> Welcome! Tell us about your day!</Text>
        {entriesList && (
            <EntryList
              entryList={entriesList}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HomeScreen;
