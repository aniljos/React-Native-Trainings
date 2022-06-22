function invokeAPI(){

    //Make an api call
    const url = "https://jsonplaceholder.typicode.com/posts";

    //GET request send is async
    const promise = fetch(url);

    //promise.then(callback);
    promise.then(function(resp){
        console.log("In onFullFilled", resp);

        resp.json().then((data) => {
            console.log("data", data);
        })
    })
    .catch(function(resp){
        console.log("In failed", resp);
    });

    console.log("fetch call is over");

    fetch({
        method: "GET", url: url, headers: {accept: "application/json"}
    })
   
}


invokeAPI();