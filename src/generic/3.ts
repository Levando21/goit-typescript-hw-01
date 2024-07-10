/** @format */

let obj1: any = {};
let obj2: any = {};

type ObjectType = {
	objA: typeof obj1;
	objB: typeof obj2;
};

function merge<T, U>(objA: T, objB: U): T & U {
	return Object.assign({}, objA, objB);
}
export {};
