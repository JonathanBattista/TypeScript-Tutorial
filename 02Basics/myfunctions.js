"use strict";
// function addTwo(num) {
//   num.toUpperCase(); This shouldnt be allowed
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo("5");
// export {};
function addTwo(num) {
    return num + 2; // -correct / simple example
    //return "hello"; - solved by asking for a second check on number
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5); //-correct / simple example
//let myValue = addTwo(5); - complicated possible problem
getUpper("jon");
signUpUser("jon", "jon@me.com", false);
loginUser("h", "h@h.com");
// multiple types
// function getValue(myVal: number)  {
//   if (myVal > 5) {
//     return true
//   }
//   return "200 ok"
// }
// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// const getHello = (s: string): string => {
//   return " "
// }
// typescript will automatically deduce what type is coming from an array
var heroes = ["thor", "spiderman", "ironman"];
//const heroes = [1, 2, 3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
//void
function consoleError(errmsg) {
    console.log(errmsg);
    //return 1
}
// never
function handleError(errmsg) {
    throw new Error(errmsg);
    //return 1
}
