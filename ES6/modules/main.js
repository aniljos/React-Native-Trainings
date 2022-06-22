import processFromTwojs from './two.js';
//import {foo, bar} from './one.js';
import * as onejs from './one.js';


console.log("in main.js")

function process(){
    console.log("main.js process");
}


process();
processFromTwojs.process()
console.log("two.js version", processFromTwojs.version);

// foo();
// bar();

onejs.foo();
onejs.bar();