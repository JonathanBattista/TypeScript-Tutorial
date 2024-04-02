"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
} // correct way to use generics
//identityThree(true)
function identityFour(val) {
    return val;
} // shorthand
//identityFour<Bottle>({})
