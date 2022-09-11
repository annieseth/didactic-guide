/**
 * @format
 */

import {Amplify,  Auth } from 'aws-amplify';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import awsconfig from './src/aws-exports';
import 'react-native-gesture-handler';


Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

AppRegistry.registerComponent(appName, () => App);
