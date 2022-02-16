// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Lucas';

let isInstructor: boolean;
isInstructor = false;

// More complex types

let hobbies: string[];
hobbies = [ 'Sports', 'Cooking' ];

let person: {
	name: string;
	age: number;
};
person = {
	name: 'Lucas',
	age: 40
};

let people: {
	name: string;
	age: number;
}[];
people = [
	{
		name: 'Lucas',
		age: 40
	},
	{
		name: 'John',
		age: 39
	}
];
