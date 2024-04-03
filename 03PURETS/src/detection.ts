function detectTypes(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide id");
    return;
  }
  id.toLowerCase;
}

//example of way of doing it but does not cover empty arrays
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  //return account.isAdmin
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// can only be used when we are using the new keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// pet is fish allows pet to be defined isntead of a boolean
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

//discriminated unions

//hacky way fo doing it
// interface Circle {
//     kind: "circle"
// }

// interface square {
//     kind: "square"
// }

interface circle {
  kind: "circle";
  radius: number;
}

interface square {
  kind: "square";
  side: number;
}

interface rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

// example of exhaustive checking

// type Shape = circle | square

// function getTrueShape(shape: Shape){
//     if(shape.kind === "circle"){
//         return Math.PI * shape.radius **2
//     }
//     return shape.side * shape.side
// }

// function getArea(shape: Shape){
//     switch(shape.kind){
//         case "circle":
//             return Math.PI * shape.radius **2

//         case "square":
//             return shape.side * shape.side
//     }
// }

// example of exhaustive checking after adding rectangle to our shape type
type Shape = circle | square | rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //return shape.side * shape.side
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.width;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
