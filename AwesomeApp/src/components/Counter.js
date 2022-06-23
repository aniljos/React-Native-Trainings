import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


class Counter extends Component{

    //immutable
    state = {
        count: 0
    }

    constructor(props){
        super(props);

        this.state.count = props.initCount;

    }

    inc = () => {
        
        console.log("inc called", this.count);
        this.setState({
            count: this.state.count + 1
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
                    <Button title='Decr'/>
                </View>
            </View>
        )
    }

}

export default Counter;