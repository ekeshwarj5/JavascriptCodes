function fetchNextElement(array){
    let idx=0;
    function nxt(){
        if(idx==array.length){
            return undefined;
        }
        const val=array[idx];
        idx++;
        return val;
    }
    return nxt;
}

const nxtElement = fetchNextElement([1,2,3,4,5,6]);
console.log(nxtElement());
console.log(nxtElement());
console.log(nxtElement());
console.log(nxtElement());
console.log(nxtElement());

