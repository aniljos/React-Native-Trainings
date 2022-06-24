import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

class ListProducts extends Component{

    state = {
        products: []
    }

    async componentDidMount(){

        const url = "http://10.0.2.2:9000/products";
        // var promise = axios.get(url);
        // //promise.then(successCallback, errorCallback)
        // promise.then((response) => {
        //     console.log("success", response)
        // }, (error) => {
        //     console.log("error", error)
        // })

        try {
            const response = await axios.get(url);
            console.log("success", response);
            this.setState({
                products: response.data
            });

        } catch (error) {
            console.log("error", error)
        }


    }
    render(){
        return (
            <View>
                <Text style={styles.headerText}>List Products</Text>

                <View>
                    {this.state.products.map((item, index) => {

                        return (
                            <View>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    headerText: {
        fontSize: 20,
        textAlign: 'center',
        color: "blue",
        marginBottom: 10
    }
})

export default ListProducts;