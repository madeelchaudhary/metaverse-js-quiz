const person1 = "M Adeel Chaudhary";

// ## A function returns function with greeting and message set and function takes a name parameter

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`);
    }
}

const greetAsk = greet("Hello", "would you like to learn some Python today?");
greetAsk(person);



const person2 = " \t M Adeel Chaudhary \n ";
console.log(person)
/*
  ## Trimed whitespaces using trim method
*/
console.log(person.trim())
