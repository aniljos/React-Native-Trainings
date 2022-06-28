import React from 'react';
import { TextInput } from "react-native";
import {styles} from '../globals/appStyles'

//React.memo ==> The component will render only if the props or the state changes

const CustomTextInput = function(props){

    console.log("in custom text input")

    return (
        <TextInput style={styles.textInput} {...props}/>
    )
};

export default React.memo(CustomTextInput);