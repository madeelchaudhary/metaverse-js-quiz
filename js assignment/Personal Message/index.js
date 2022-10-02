const person = "M Adeel Chaudhary";

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`)
    }
}

const greetAsk = greet("Hello", "would you like to learn some Python today?");
greetAsk(person)