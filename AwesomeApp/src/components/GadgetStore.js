import React, { useEffect } from 'react';
import  { View, Text } from "react-native";

function GadgetStore(){

  // useEffect(() => {}, []) with no dependencies ==> componentDidMount
   useEffect(() => {

        console.log("same as the componentDidMount");

        // callback returned in the useEffect with no dependencies => componentWillUnmount
        return ()=> {
            console.log("same as the componentWillUnmount");
        }

   }, [])

   // useEffect(() => {}, []) with  dependencies ==> componentDidUpdate
//    useEffect(() => {

//     console.log("same as the componentDidUpdate");

//     }, ["state/props"])

    return (
        <View>
            <Text>Gadget Store</Text>
        </View>
    )
}

export default GadgetStore;