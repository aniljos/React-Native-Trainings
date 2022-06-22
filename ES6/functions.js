
//function statement
//receives 2 implicit arguments => this, arguments
function sum(x, y){

    console.log("in sum ", this);
    
}
// function sum(){
//     console.log("in sum with no args");
    
// }
window.sum(3, 4);
sum();
sum(2,3,4,5);

//function expression
const add = function(x, y){
    console.log("in add", arguments);
}
add(1,2);

//Arrow function
//donot receive 2 implicit arguments => this, arguments
const calc = (x, y)=>{
    console.log(typeof(x));
    console.log("in calc", x, y,);
}

calc(8,9);

const squareIt = x =>  x * x;
console.log("squareIt: ", squareIt(11));

var z = 100;
//Object literal
const user = {
    id: 10,
    
    print : function(){

        var test = 20;

        //console.log("z: ", z);
        console.log("User Id: ", this);
        setTimeout(()=>{
            //var test = 70;
            console.log("print after 2 secs", this, test)
        }, 2000);

        // const handle = setInterval(function(){
        //     console.log("print after 2 secs", )
        // }, 2000);

        // setTimeout(function(){
        //     clearInterval(handle);
        // }, 10000);

    }
}

user.print();

