const person = {
    name: 'Ricardo',
    age: 29,
    greet() {
        console.log(`Hi, I'm ${this.name}!`)
    }
}

const printName = ({
    name
}) => {
    console.log(name);
}

printName(person);

const {
    name,
    age
} = person;

console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);