import React, {Component} from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class ListProducts extends Component{


    componentDidMount(){

        const url = "http://10.0.2.2:9000/products";
        var promise = axios.get(url);
        //promise.then(successCallback, errorCallback)
        promise.then((response) => {
            console.log("success", response)
        }, (error) => {
            console.log("error", error)
        })

    }
    render(){
        return (
            <View>
                <Text>List Products</Text>
            </View>
        )
    }
}
export default ListProducts;