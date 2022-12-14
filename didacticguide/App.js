/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, TouchableOpacity} from 'react-native';
 import {createStackNavigator} from '@react-navigation/stack';
 import {NavigationContainer} from '@react-navigation/native';
 import HomeScreen from './src/screens/home-screen';
 import {Button} from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {withAuthenticator} from 'aws-amplify-react-native';
import Calendar from './src/screens/calendar';
import {Auth} from 'aws-amplify';


Icon.loadFont();
 const App: () => React$Node = () => {
   const Stack = createStackNavigator();
   return (
     <>
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen
             name="Home"
             component={HomeScreen}
             options={({navigation}) => ({
               title: 'Home',
               headerStyle: {
                 backgroundColor: '#ff9300',
               },
               headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="sign-out" size={25} color="#000000" />}
                    onPress={ () => {
                      Auth.signOut();
                    }}
                    type="clear"
                  />
                </View>
              ),
               headerRight: () => (
                 <TouchableOpacity
                   style={styles.addButton}
                   onPress={() => navigation.navigate('Calendar')}>
                   <Icon name={'plus'} size={20} color="#000000" />
                 </TouchableOpacity>
               ),
             })}
           />
           <Stack.Screen
             name="Calendar"
             buttonStyle={styles.addButton}
             component={Calendar}
             options={{
               title: 'Life Updates',
               headerStyle: {
                 backgroundColor: '#ff9300',
               },
             }}
           />
         </Stack.Navigator>
       </NavigationContainer>
     </>
   );
 };
 const styles = StyleSheet.create({
   addButton: {
     marginRight: 20,
   },
   logOutBtn: {
     marginLeft: 10,
   },
 });
 
 export default withAuthenticator(App);