import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';




class Counter extends Component{

    //immutable
    state = {
        count: 0,
        message: "hello"
    }

    constructor(props){
        super(props);

        this.state.count = props.initCount;
        this.decr = this.decr.bind(this);

    }

    inc = () => {
        
        
        //setState ==> Async method
        //setState(slice of the state to update, callbackToInvokeAfterStateUpdate)
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("inc called", this.state.count);
        });
        
    }

    decr = function(){
        //setState ==> Async method
        //setState(slice of the state to update, callbackToInvokeAfterStateUpdate)
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log("inc called", this.state.count);
        });
        
    }

    render(){
        //return the JSX
        return (
            <View>
                <Text>Count : {this.state.count}</Text>
                <View>
                    <Button title='Inc' onPress={this.inc}/>
                </View>
                <View>
                    <Button title='Decr' onPress={this.decr}/>
                </View>
            </View>
        )
    }

}

export default Counter;