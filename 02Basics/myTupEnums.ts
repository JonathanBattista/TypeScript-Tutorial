//using tuples to specify order of arrays by type

//let user: (string | number)[] = ['hc', 1]
let tUser: [string, number, boolean];

tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type TUser = [number, string];

const newTUser: TUser = [112, "example@gmail.com"];

newTUser[1] = "hc.com";
//newTUser.push(true) used to be an issue
