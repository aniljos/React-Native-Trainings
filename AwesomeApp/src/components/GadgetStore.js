import React, { useEffect, useState } from 'react';
import  { View, Text, Alert, FlatList, Button } from "react-native";
import axios from 'axios';
import { styles } from '../globals/appStyles';

// Custom react hook to dispatch actions
import {useDispatch} from 'react-redux';

// actions used by the dispatch
import {addToCart, removeFromCart} from '../redux/cartSlice';


function GadgetStore(props){

    const [results, setResults] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const dispatch = useDispatch();

  // useEffect(() => {}, []) with no dependencies ==> componentDidMount
   useEffect(() => {

        console.log("same as the componentDidMount");
        loadProducts();

        // callback returned in the useEffect with no dependencies => componentWillUnmount
        return ()=> {
            console.log("same as the componentWillUnmount");
        }

   }, [])

   // useEffect(() => {}, []) with  dependencies ==> componentDidUpdate
//    useEffect(() => {

//     console.log("same as the componentDidUpdate");

//     }, ["state/props"])


   async function loadProducts(){

        try {

            setIsRefreshing(true);
            const url = "http://10.0.2.2:9000/products";
            const resp = await axios.get(url);
            setResults(resp.data);
            setIsRefreshing(false);

        } catch (error) {

            setIsRefreshing(false);
            Alert.alert("Error", "Not able to fetch data");
            console.log(error);
        }
   }

   function pushToCart(product){


        dispatch(addToCart({product, qty: 1}));
        Alert.alert("Message", "Added to Cart");
   }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Gadget Store</Text>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', margin: 7}}>
                <Button title='View Cart' onPress={()=> {props.navigation.navigate("viewcart")}}/>
            </View>
            
            <FlatList 
                    data={results} 
                    keyExtractor={item => item.id}
                    refreshing={isRefreshing}
                    onRefresh={loadProducts}
                    renderItem={(result) => {
                        return (
                            <View style={styles.itemContainer}>
                                <Text style={{fontSize: 18, textAlign: 'center', marginBottom: 3}}>{result.item.name}</Text>
                                <Text style={{fontSize: 16, color: 'blue', marginBottom: 3}}>{`$ ${result.item.price}`}</Text>
                                <Text style={{fontSize: 16, color: 'green', marginBottom: 3}}>{result.item.description}</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <Button title='Add To Cart' onPress={() => pushToCart(result.item)}/>
                                </View>
                            </View>
                        )
                    }}/>
                
        </View>
    )
}

export default GadgetStore;