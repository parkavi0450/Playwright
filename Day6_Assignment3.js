//Factorial
function factorial(n) {
    var result = 1;
    if (n < 0) {
        console.log("Invalid Input - Negative number");
        return n;
    }
    else {
        for (var x = 2; x <= n; x++) {
            result = result * x;
        }
        return result;
    }
}
console.log(factorial(5));
console.log(factorial(-4));
