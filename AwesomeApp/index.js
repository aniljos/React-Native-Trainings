/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListProducts from './src/components/ListProducts';

//Regiter the root component
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ListProducts);