/** @format */

//let person = ["Max", 21];

type PersonArray = [string, number];

function createPerson(): PersonArray {
	return ["Max", 21];
}

let person: PersonArray = createPerson();
console.log(person);
