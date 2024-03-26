const User = {
  name: "jon",
  email: "jon@jon.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "jon", isPaid: false, email: "j@j.com" };
// should stop you and needs an optional
createUser(newUser);

//function createCourse// function name// ()// function parameter:{}//return type{}//definition

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
