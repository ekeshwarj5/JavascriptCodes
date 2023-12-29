// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function process(){
    let i=0;
    function innerProcess(){
        i+=1;
        return i;
    }
    return innerProcess;
}
// let res = process();
// console.log(res);
// console.log("Calling first time ",res());
// console.log("Calling Second time ",res());
// console.log("Calling Third time ",res());

// Iterators in JavaScript
let arr = [1,2,3,4,5];
iterator = arr[Symbol.iterator]();
console.log(iterator.next());
