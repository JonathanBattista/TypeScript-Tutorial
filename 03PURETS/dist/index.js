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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Balt";
    }
}
const jon = new User("jon@jon.com", "jon");
