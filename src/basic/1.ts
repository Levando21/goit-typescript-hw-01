/** @format */

let age: number = 50;
let username: string = "Max";
let toggle: boolean = true;
let empty: null = null;

//const callback = (a) => { return 100 + a };

const callback = (a: number) => {
	return 100 + a;
};

let result = callback(42);
console.log(result);
export {};
