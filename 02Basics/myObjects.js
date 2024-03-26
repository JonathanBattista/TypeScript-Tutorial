var User = {
    name: "jon",
    email: "jon@jon.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "jon", isPaid: false, email: "j@j.com" };
// should stop you and needs an optional
createUser(newUser);
//function createCourse// function name// ()// function parameter:{}//return type{}//definition
function createCourse() {
    return { name: "reactjs", price: 399 };
}
