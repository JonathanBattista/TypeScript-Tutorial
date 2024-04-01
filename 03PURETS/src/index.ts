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
  readonly city: string = "Balt";
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
}

const jon = new User("jon@jon.com", "jon");
