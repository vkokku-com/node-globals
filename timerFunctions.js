function printHello() {
    console.log('Hello');
}

//the above function will be called 2 seonds
var t = setTimeout(printHello, 2000);

//Now clear the timer
clearTimeout(t);
console.log("the function won't be executed");