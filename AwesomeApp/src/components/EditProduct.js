import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";


class EditProduct extends Component{

    state = {
        currentProduct: null
    }

    constructor(props){
        super(props);

        this.state.currentProduct = this.props.product;
    }

    handleNameChange = (value) => {

        const product = {...this.state.currentProduct};
        product.name = value;
        this.setState({
            currentProduct: product
        })
    }

    handlePriceChange = (value) => {

        const product = {...this.state.currentProduct};
        product.price = value ? parseFloat(value) : 0
        this.setState({
            currentProduct: product
        })
    }

    handleDescriptionChange = (value) => {

        const product = {...this.state.currentProduct};
        product.description = value;
        this.setState({
            currentProduct: product
        })
    }

    save = () => {
        if(this.props.onSave){
            this.props.onSave(this.state.currentProduct)
        }
    }
    cancel = () => {
        if(this.props.onCancel){
            this.props.onCancel("Operation cancelled")
        }
    }

    render(){

        const {id, name, price, description} = this.state.currentProduct;

        return(
        <View>
            <Text>Edit Product</Text>

            <Text>ID : {id} </Text>

            <TextInput placeholder="Name" keyboardType="default" 
                    value={name} onChangeText={this.handleNameChange}/>
            <TextInput placeholder="Price" keyboardType="numeric" value={"" + price} onChangeText={this.handlePriceChange}/>
            <TextInput placeholder="Description" keyboardType="default" value={description} onChangeText={this.handleDescriptionChange}/>

            <View>
                <Button title="Save" onPress={this.save}/>
                <Button title="Cancel" onPress={this.cancel}/>
            </View>
        </View>
        );
    }
}

export default EditProduct;