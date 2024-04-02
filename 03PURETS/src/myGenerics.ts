const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
} // correct way to use generics

//identityThree(true)

function identityFour<T>(val: T): T {
  return val;
} // shorthand

interface Bottle {
  brand: string;
  type: number;
}

//identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

//convert into an arrow fucntion

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};
