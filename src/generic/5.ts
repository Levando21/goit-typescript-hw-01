/** @format */

type UserRole = "admin" | "editor" | "guest";
type RoleRecords = Record<UserRole, string>;
const roleObj: RoleRecords = {
	admin: "Admin User",
	editor: "Editor User",
	guest: "Guest User",
};

console.log(roleObj);
export {};
