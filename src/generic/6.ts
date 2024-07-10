/** @format */

type Errors = {
	email?: string[];
	firstName?: string[];
	lastName?: string[];
	phone?: string[];
};

type Form = {
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
	errors: Errors;
};

type FormWithoutErrors = Omit<Form, "errors">;

const newForm: FormWithoutErrors = {
	email: "ladlsflsfl@gmail.com",
	firstName: "Yarik",
	lastName: "Kolya",
	phone: "+6748283748",
};

console.log(newForm);
export {};
