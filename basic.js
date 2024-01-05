let arr = [1,3,5,2,2];
let totalSum = 0;
for(let i=0;i<arr.length;i++){
    totalSum+=arr[i];
}

console.log(totalSum);

let leftSum = 0;

for(let i=0;i<arr.length;i++){
    totalSum-=arr[i];
    if(leftSum===totalSum){
        console.log(i+1);
        break;
    }
    leftSum+=arr[i];
}
