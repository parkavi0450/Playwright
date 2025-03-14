//Fibonacci Series
function fibonacci(n) {
    if (n < 0) {
        console.log("Invalid Input - Negative number");
        return n;
    }
    else if (n < 2) {
        return n;
    }
    var a = 0;
    var b = 1;
    for (var x = 2; x <= n; x++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci(4));
console.log(fibonacci(1));
console.log(fibonacci(-2));
