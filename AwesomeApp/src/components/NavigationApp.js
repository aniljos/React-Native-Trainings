import React, { useEffect, useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Login";
import GadgetStore from "./GadgetStore";
import ViewCart from "./ViewCart";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from "./Contacts";

const Stack = createNativeStackNavigator();

function NavigationApp(){

    const [isAuth, setIsAuth] = useState(false);
    
    useEffect(() => {

        getUserInfo();

    }, [])

    async function getUserInfo(){
        const userInfo = await AsyncStorage.getItem("userInfo");
        console.log("userInfo", userInfo);
        if(userInfo){
            //makes a call to login
            setIsAuth(true);
        }
        else{

            //display the login page;
            setIsAuth(false);
        }
    }
    return (
        <NavigationContainer>
            {isAuth ?  <Stack.Navigator >

                <Stack.Screen name="gadgets" component={GadgetStore} />
                <Stack.Screen name="viewcart" component={ViewCart}/>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="contacts" component={Contacts} />
               
                
                
            </Stack.Navigator> : 
            <Stack.Navigator>
                <Stack.Screen name="gadgets" component={GadgetStore}/>
                <Stack.Screen name="viewcart" component={ViewCart}/>
                 <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="contacts" component={Contacts} />
               
                
            </Stack.Navigator>}
        </NavigationContainer>
    );
}

export default NavigationApp;