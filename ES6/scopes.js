// Done by the interpreter
// var x,y;


console.log("Scopes Demo...");

console.log("x: ", x);
var x = 10;  //global
console.log("x: ", x);



var y; //global ==> undefined
console.log("y: ", y);

//console.log("z: ", z); // Exception


function foo(){
        // hoisting var a;

    console.log("in foo");
    var a = 50; // function scope
    console.log("a in foo", a);
    console.log("x in foo", x);

    if(a < 100){
        let msg = "hello";
    }
    console.log("msg in foo: ", msg);

}
foo();

console.log("App Over...");




