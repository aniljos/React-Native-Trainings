import axios from 'axios';
import React, { useState } from 'react';
import  { View, Text, Button, TextInput, Alert } from "react-native";
import {styles} from '../globals/appStyles';

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
            props.navigation.navigate("gadgets");

        } catch (error) {
            
            console.log(error);
            Alert.alert("Login", "Invalid Credential");
        }
    }
    return (
        <View style={styles.container}>
            <Text  style={styles.titleText}>Login</Text>

            <TextInput  style={styles.textInput} placeholder='User Name' keyboardType='default' 
                        value={userName} onChangeText={(value) => {setUserName(value)}}/>
            <TextInput style={styles.textInput} placeholder='Password' 
                    keyboardType='default' secureTextEntry={true} value={password} 
                            onChangeText={value => setPassword(value)}/>

            <View style={styles.actionContainer}>
                <Button title='Login' onPress={login}/>
                <Button title='Forgot Password' />
            </View>
            
            
        </View>
    )
}

export default Login;