console.log("in one.js");


export function foo(){
    console.log("one.js foo");
}

export function bar(){

    foo();
    console.log("one.js bar")
}


export class Test{}

export default bar;