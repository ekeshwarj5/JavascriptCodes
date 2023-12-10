// for downloading the data from the url

function downloader(url, fn){
    console.log("Downloading started");
    setTimeout(function down(){
        console.log("Downloaded completed from ",url);
        let content = "ABCDEF";
        fn(content);
    },5000);
}

function upload(url, file, cb){
    console.log("Started uploading", file, "on",url);
    setTimeout(function up(){
        console.log("Upload Completed");
        const response = "SUCESS";
        cb(response); 
    },2000);
}

function writefile(content, cb){
    console.log("Started writing the file ",content);
    setTimeout( function write(){
        console.log("Completed writing the data in the file");
        const filename = "abc.txt";
        cb(filename);
    },5000)
}

downloader("abcdef",function SaveData(content){
    console.log("We are now going to process the downloading data");
    writefile(content, function processWriter(filename){
        console.log("We have downlaoded and writtern the file, now we will upload");
        upload("www.upload.com",filename, function processUpload(response){
            console.log("we have uploaded with", response);
        });
    });
});