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
