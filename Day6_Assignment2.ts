//Fibonacci Series


function fibonacci(n: number){

    if(n<0){
        console.log("Invalid Input - Negative number")
        return n;

    }else if(n<2){
        return n;
    }
    
    let a = 0;
    let b = 1;

    for (let x = 2; x <= n; x++) {
        let c = a+b;
        a = b;
        b = c;
    }
     
    return b;
}

console.log(fibonacci(5));
console.log(fibonacci(1));
console.log(fibonacci(-2));
