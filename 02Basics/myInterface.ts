interface IUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial: () => string
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}
// REOPENIGN THE INTERFACE
interface IUser {
  githubToken: string;
}

//INHERITANCE

interface IAdmin extends IUser {
  roel: "admin" | "ta" | "learner";
}

const Ijon: IUser = {
  dbId: 22,
  email: " j@j.com",
  userId: 2211,
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "jon10", off: 10) => {
    return 10;
  },
};

Ijon.email = "j@jgmail.com";
//Ijon.dbId = 33
