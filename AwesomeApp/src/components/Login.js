import axios from 'axios';
import React, { useCallback, useState } from 'react';
import  { View, Text, Button, TextInput, Alert, Platform, ToastAndroid } from "react-native";
import {styles} from '../globals/appStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from './CustomTextInput';

state = {
    userName: ""
}

// Being part of the Navigation Stack it receives the props with the navigation object
function Login(props){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

    async function login(){

        try {
            const resposne = await axios.post("http://10.0.2.2:9000/login", {name: userName, password: password});
            AsyncStorage.setItem("userInfo", JSON.stringify({userName, password}) );
            
            props.navigation.navigate("gadgets");

        } catch (error) {
            
            console.log(error);

            if(Platform.OS === 'ios'){
                Alert.alert("Login", "Invalid Credential");
            }
            if(Platform.OS === 'android'){
                ToastAndroid.show("Invalid Credential", ToastAndroid.LONG);
            }
            
        }
    }
   
    const onChangePassword = useCallback( (value) => {
        
        setPassword(value);

    }, [password]);
    return (
        <View style={styles.container}>
            <Text  style={styles.titleText}>Login</Text>

            <TextInput  style={styles.textInput} placeholder='User Name' keyboardType='default' 
                        value={userName} onChangeText={(value) => {setUserName(value)}}/>

            {/* <CustomTextInput style={styles.textInput} placeholder='Password' 
                    keyboardType='default' secureTextEntry={true} value={password} 
                            onChangeText={value => setPassword(value)}/> */}

                <CustomTextInput style={styles.textInput} placeholder='Password' 
                    keyboardType='default' secureTextEntry={true} value={password} 
                            onChangeText={onChangePassword}/>

            <View style={styles.actionContainer}>
                <Button title='Login' onPress={login}/>
                <Button title='Forgot Password' />
            </View>
            
            
        </View>
    )
}

export default Login;