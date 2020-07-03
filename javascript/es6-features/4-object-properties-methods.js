const person = {
    name: 'Ricardo',
    age: 29,
    greet() {
        console.log(`Hi, I'm ${this.name}!`)
    }
}

person.greet();