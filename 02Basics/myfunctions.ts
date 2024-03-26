// function addTwo(num) {
//   num.toUpperCase(); This shouldnt be allowed
//   return num + 2;
// }

// addTwo("5");

// export {};

function addTwo(num: number) {
  //return num + 2;
  return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

//addTwo(5);
let myValue = addTwo(5);
getUpper("jon");
signUpUser("jon", "jon@me.com", false);
loginUser("h", "h@h.com");

export {};
