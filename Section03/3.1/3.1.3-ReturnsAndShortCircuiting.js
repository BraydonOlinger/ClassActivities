// ? what does the function below return?
// function myNumberFunction() {
//     let num = 2 ** 2;
//     num = num + 3;
//     num = num % 4;
//     num = num * 14;
//     return(num);
// }
//it returns undefined

// change the function above to return a value
function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    return(num);
}
myNumberFunction();

// Short Circuiting
  // ! the return will not print
function shortCircuitFunction() {
    return "Zap! - Short Circuited!";
    return(
    "This will never print because it is after the return statement."
    );
}


  // ? will the following function short circuit?
let height = 50;
function checkCircusRides() {
    if (height < 48) {
    return "Take a ride on the carousel!";
    }
    if (height < 60) {
    return "Try the bumper cars!";
    }
    return "Enjoy the roller coaster!";
}


checkCircusRides();
  // change the function above to use short circuiting