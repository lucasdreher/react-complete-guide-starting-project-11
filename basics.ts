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

// Functions & types

function add(a: number, b: number) {
	return a + b;
}

function print(value: any) {
	console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [ value, ...array ];
	return newArray;
}

const demoArray = [ 1, 2, 3 ];

const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray[0].split(''); // Get error, 'split' does not exists on type 'number'

const stringArray = insertAtBeginning([ 'a', 'b', 'c' ], 'd');
stringArray[0].split('');
