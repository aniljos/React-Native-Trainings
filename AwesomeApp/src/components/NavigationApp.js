import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Login";
import GadgetStore from "./GadgetStore";
import ViewCart from "./ViewCart";


function NavigationApp(){

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="gadgets" component={GadgetStore}/>
                <Stack.Screen name="viewcart" component={ViewCart}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationApp;