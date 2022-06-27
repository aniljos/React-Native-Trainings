import React from 'react';
import  { View, Text, FlatList } from "react-native";
import {useSelector} from 'react-redux';
import { styles } from '../globals/appStyles';


function ViewCart(){

    const cart = useSelector(state => state.shop.cart)
    console.log(cart);


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>ViewCart</Text>

            <FlatList data={cart} keyExtractor={(item, index) => "" + index}
                    renderItem={(result) => {
                        return(
                        <View style={styles.itemContainer}>
                            <Text style={{marginBottom: 10}}>{result.item.product.name}</Text>
                            <Text>{`Quantity: ${result.item.qty}`}</Text>
                        </View>
                    )
            }} />
        </View>
    )
}

export default ViewCart;