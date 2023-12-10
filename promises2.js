function fetchdata(url){
    return new Promise(function (resolve, reject){
        console.log("Started downloading from ", url);
        setTimeout(function processDownlaoding(){
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data); 
        },7000);
    });
}

console.log("Start");
let PromiseObj = fetchdata("abcdef");
PromiseObj.then(function A(value){ //In .then if only ne funtion is present then we have to consider it as fulfilment handler
    console.log("value is ", value);
});
console.log("end");