import React, {Component, PureComponent} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,TouchableOpacity, Alert
} from 'react-native';
import axios from 'axios';
import EditProduct from './EditProduct';

class ListProducts extends PureComponent {

  //immutable  
  state = {
    products: [],
    selectedProduct: null
  };

  constructor(props){
    super(props);

    console.log("[ListProducts constructor]")
  }

  async componentDidMount() {

    console.log("[ListProducts componentDidMount]")
    const url = 'http://10.0.2.2:9000/products';
    // var promise = axios.get(url);
    // //promise.then(successCallback, errorCallback)
    // promise.then((response) => {
    //     console.log("success", response)
    // }, (error) => {
    //     console.log("error", error)
    // })

    try {
      const response = await axios.get(url);
      console.log('success', response);
      this.setState({
        products: response.data,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  deleteItem = (product, index) => {
    Alert.alert("Message", `Do you want to remove the item ${product.name}?`, [
        {
            text: "Cancel"
        },
        {
            text: "Delete",
            onPress: async () => {

                const url = `http://10.0.2.2:9000/products/${product.id}`;
                try {
                    
                    const response = await axios.delete(url);
                    console.log("delete reponse", response);

                    //create a copy of this.state.products
                    const productsCopy = [ ...this.state.products];
                    productsCopy.splice(index, 1);
                    this.setState({
                        products: productsCopy
                    });


                } catch (error) {
                    console.log("delete error", error);
                }
            }
        }
    ]);
  }

  editItem = (product, index) => {

    this.setState({
        selectedProduct: product
    });
  }

  editCancel = (message)=> {
    //Alert.alert("Message", message);
    this.setState({
        selectedProduct: null
    })
  }

  editUpdate = async (updatedProduct) => {
    Alert.alert("Message", "Updating product: " + updatedProduct.name);

    try {
        
        const url = `http://10.0.2.2:9000/products/${updatedProduct.id}`;
        const response = await axios.put(url, updatedProduct);

        const resp = await axios.get(`http://10.0.2.2:9000/products`);
        this.setState({
            products: resp.data
        });

        
    } catch (error) {
        console.log(error);
    }

  }

  render() {

    console.log("[ListProducts render]")
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>List Products</Text>

        {this.state.selectedProduct !== null ? <EditProduct 
                                                    key={this.state.selectedProduct.id} 
                                                    product={this.state.selectedProduct}
                                                    onSave={this.editUpdate}
                                                    onCancel={this.editCancel}/> : null}

        <View>
          {this.state.products.map((item, index) => {
            // const imageUrl = `http://10.0.2.2:9000${item.imageUrl}`;
            // console.log(imageUrl);
            return (
              <TouchableOpacity key={item.id} 
                        onLongPress={() => { this.deleteItem(item, index)}}
                        onPress={() => {this.editItem(item, index)}}>
                <View  style={styles.productContainer}>
                  <Image
                    source={{uri: `http://10.0.2.2:9000${item.imageUrl}`}}
                    style={{height: 100, width: 100, resizeMode: 'contain'}}
                  />
                  <View style={styles.itemContainer}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text numberOfLines={4}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  componentWillMount(){
    console.log("[ListProducts componentWillMount]");
  }
  componentWillReceiveProps(){
    console.log("[ListProducts componentWillReceiveProps]");
  }
//   shouldComponentUpdate(){
//     console.log("[ListProducts shouldComponentUpdate]");
//     return true;
//   }
  componentWillUpdate(){
    console.log("[ListProducts componentWillUpdate]");
  }
  componentDidUpdate(){
    console.log("[ListProducts componentDidUpdate]");
  }
  componentWillUnmount(){
    console.log("[ListProducts componentWillUnmount]");
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  productContainer: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    marginBottom: 10,
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
    marginBottom: 10,
  },
  itemContainer: {
    marginLeft: 7,
    marginRight: 7,
  },
});

export default ListProducts;
