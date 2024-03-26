"use strict";
// function addTwo(num) {
//   num.toUpperCase(); This shouldnt be allowed
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo("5");
// export {};
function addTwo(num) {
    //return num + 2;
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
//addTwo(5);
var myValue = addTwo(5);
getUpper("jon");
signUpUser("jon", "jon@me.com", false);
loginUser("h", "h@h.com");
