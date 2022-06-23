import React from 'react';
import {Text, View} from 'react-native';

function Hello(props){

    console.log(props);
    //props.message = "Hi " + props.message;
    return (
            <View>
                <Text>Hello React</Text>
                <Text>Generated Date: {new Date().toTimeString()}</Text>
                <Text>Message : {props.message}</Text>

            </View>
    );
}

export default Hello;