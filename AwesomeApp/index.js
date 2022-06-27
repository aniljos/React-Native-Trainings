/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListProducts from './src/components/ListProducts';
import NavigationApp from './src/components/NavigationApp';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

//create a root component with redux store

function AppRoot(){
    return (
        <Provider store={store}>
            <NavigationApp/>
        </Provider>
    )
}


//Regiter the root component
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppRoot);
