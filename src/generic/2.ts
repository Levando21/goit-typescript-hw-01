/** @format */

type AllType = {
	name: string;
	position: number;
	color: string;
	weight: number;
};

type topType = {
	name: string;
	color: string;
};

type bottomType = {
	position: number;
	weight: number;
};

function compare<T extends topType, U extends bottomType>(
	top: T,
	bottom: U
): AllType {
	return {
		name: top.name,
		color: top.color,
		position: bottom.position,
		weight: bottom.weight,
	};
}
export {};
