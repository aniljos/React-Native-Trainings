import React from 'react';
import { TextInput } from "react-native";
import {styles} from '../globals/appStyles'

function CustomTextInput(props){

    return (
        <TextInput style={styles.textInput} {...props}/>
    )
}

export default CustomTextInput;