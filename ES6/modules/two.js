import bar from './one.js';


console.log("in two.js");


function process(){

    bar();
    console.log("two.js process");
}

const version = "1.0"

export default {
    process, version
}