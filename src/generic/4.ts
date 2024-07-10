/** @format */

type User = {
	name: string;
	surname: string;
	email: string;
	password: string;
};

function createOrUpdateUser(data: Partial<User>): User {
	const defaultUser: User = {
		name: "max",
		surname: "novikov",
		email: "",
		password: "",
	};

	return { ...defaultUser, ...data };
}

const newUser = createOrUpdateUser({
	email: "user@mail.com",
	password: "password123",
});

console.log(newUser);

export {};
