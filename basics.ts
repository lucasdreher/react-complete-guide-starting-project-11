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

type Person = {
	name: string;
	age: number;
};

let person: Person;
person = {
	name: 'Lucas',
	age: 40
};

let people: Person[];
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

// Type inference

let course = 'React - The Complete Guide';
// course = 12341;

//Union Types

let courseUnion: string | number = 'React - The Complete Guide';
courseUnion = 12341;
