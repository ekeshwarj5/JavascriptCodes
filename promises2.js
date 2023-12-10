function fetchdata(url){
    return new Promise(function (resolve, reject){
        console.log("Started downloading from ", url);
        setTimeout(function processDownlaoding(){
            let data = "Dummy data";
            
            resolve(data); 
            console.log("Download completed");
        },7000);
    });
}

console.log("Start");
let PromiseObj = fetchdata("abcdef");
PromiseObj.then(function A(value){ //In .then if only one funtion is present then we have to consider it as fulfilment handler
    console.log("value is ", value);
});
console.log("end");