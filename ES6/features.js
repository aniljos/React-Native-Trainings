// Destructuring

var names = ["anil", "tapan", "kaushik"];

//var nm1 = names[0]; var nm2 = names[1]; var nm3= names[2];

var [nm1, nm2, nm3] = names;
console.log(nm1, nm2, nm3);

var obj = {name: "abc", type:"t1" }

//var name = obj.name; var type=obj.type;
var {name, type} = obj;
console.log(name, type);

//Spread Operator

const numbers = [1,2,3,4,5,6,7,8]; //numbers = ""
console.log("numbers", numbers);

//spread numbers to create a deep copy
const copy_of_numbers = [...numbers];
console.log("copy_of_numbers", copy_of_numbers);

numbers.push(9);
console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

const another_copy = [-2, -1, 0, ...numbers, 10, 11, 12, ...copy_of_numbers]
console.log("another_copy", another_copy);

// Template literal

const message = `The name is ${name} and type is ${type}`;
//const Localmessage = `The name is ${t('nameLabel')} and type is ${type}`;
console.log(message);


