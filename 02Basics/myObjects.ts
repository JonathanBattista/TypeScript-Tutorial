// const User = {
//   name: "jon",
//   email: "jon@jon.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "jon", isPaid: false, email: "j@j.com" };
// should stop you and needs an optional
// createUser(newUser);

//function createCourse// function name// ()// function parameter:{}//return type{}//definition

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

//type aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };
//you can rename your types if you want
//type Mystring = string

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "a", email: "a", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
  //? means optional type
};

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "j@j.com",
  isActive: true,
};

myUser.email = "h@gmail.com";
// myUser._id= 'asa' // we cant do this because its read only
