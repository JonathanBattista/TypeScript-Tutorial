"use strict";
// class User {
//   public email: string;
//   private name: string;
//   //#name: string; another way to write private but only used in JS
//   readonly city: string = "Balt";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
//const jon = new User("jon@jon.com", "jon");
//jon.city = "balt";
// better way to wrie it and introducing the public and priavte keyword
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Balt";
    }
    // private method
    deleteToken() {
        console.log("token deleted");
    }
    // getters
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setters (cannot be void)
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const jon = new User("jon@jon.com", "jon");
//jon.deleteToken()
