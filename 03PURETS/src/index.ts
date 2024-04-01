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
  protected _courseCount = 1; // can be inherited
  // private _courseCount = 1; cant be inherited
  readonly city: string = "Balt";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}
  // private method
  private deleteToken() {
    console.log("token deleted");
  }
  // getters
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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

// private does not allow that property to be inherited
// protected allows properties of classes to be inherited
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const jon = new User("jon@jon.com", "jon");

//jon.deleteToken()
