function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("Starting to downlaod data from", url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        },1000);
    });
}

function writeFile(data){
    return new Promise(function exec(resolve,reject){
        console.log("Started writing a file with",data);
        setTimeout(function write(){
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        },5000);
    });
}

function uploadData(file, url){
    return new Promise(function exec(resolve,reject){
        console.log("Started uploading",file, "on" ,url);
        setTimeout(function up(){
            console.log("Upload Completed");
            const response = "SUCESS";
            resolve(response);
        },2000);
    });
}

async function steps(){
    console.log("Starting steps");
    const downlaodData = await download("www.xyz.com");
    console.log("Downloaded data is ",downlaodData);
    const fileWritten = await writeFile(downlaodData);
    console.log("File written is ", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload response is ",uploadResponse);
    return uploadResponse;
}

steps();