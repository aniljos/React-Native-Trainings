//import {createStore} from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

//init data

const initData = {
    count: 5,
    message: "Hello Redux"
}

//reducer
const reducer = (currentState=initData, action) => {

    if(action.type === "INC"){

        return {
            ...currentState,
            count : currentState.count + 1
        }
    }

    if(action.type === "DECR"){
        
        return {
            ...currentState,
            count : currentState.count - 1
        }
    }
    //return the updated state
    return currentState;
}

//create store
const store = createStore(reducer);
console.log("State: ", store.getState());

store.dispatch({type: "INC"});
console.log("State: ", store.getState());

store.dispatch({type: "DECR"});
console.log("State: ", store.getState());

