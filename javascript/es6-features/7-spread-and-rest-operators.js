const hobbies = ['Sports', 'Cooking'];

// How to deep copy an array
const copiedArray = hobbies.slice();
const copiedArray2 = [...copiedArray]; // The spread operator works in arrays or objects

hobbies.push('example');
console.log(hobbies);
console.log(copiedArray);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));