// callbacks, promises
function invokeAsync(x) {
  return new Promise(function (resolve, reject) {
    console.log("resolve: ", resolve);
    console.log("reject: ", reject);
    setTimeout(function () {
      if (x && x > 10) {
        resolve({ result: x * x, message: "sucess" });
      } else {
        reject("invalid value");
      }
    }, 1000);
  });
}

// const promise = invokeAsync(20);
// promise.then((result) => {
//     console.log(result)
// }, (error) => {
//     console.log(error)
// })

async function callInvoke() {
//   invokeAsync(20).then(
//     (result) => {
//       console.log(result);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//console.log("result", result);  
    try {
        const result = await invokeAsync(200);
        console.log("result", result);

    } catch (error) {
         console.log("error", error);
    }
}

callInvoke();


const numbers = [1,2,3,4,5,6,7];

const squares = numbers.map((item, index) => {
  return item * item;
});

console.log(numbers);
console.log(squares);
