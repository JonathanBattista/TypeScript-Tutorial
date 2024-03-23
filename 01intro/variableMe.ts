//Typsescript is smart enough to assign values to variables and tell you when you can or cannot use functions or methods for said variables

//string

let greetings: string = "Jon";

greetings.toLowercase();

console.log(greetings);

// number

let userId = 334455.3;

userId.toFixed();
//number = 334455.3
//userId = 27

// boolean

let isLoggedIn: boolean = false;

// any

let hero;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
