class User {
  email: string;
  name: string;
  readonly city: string = "Balt";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const jon = new User("jon@jon.com", "jon");
//jon.city = "balt";
