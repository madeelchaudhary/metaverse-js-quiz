const person = "M Adeel Chaudhary";

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`)
    }
}

const greetAsk = greet("Hello", "would you like to learn some Python today?");
greetAsk(person.toLowerCase())
greetAsk(person.toUpperCase())

const titleCaseName = person.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
greetAsk(titleCaseName)