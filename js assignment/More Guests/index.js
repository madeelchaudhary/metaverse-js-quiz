const peopleInvited = ["Arslan", "Zeshan", "Husnain"];

peopleInvited.forEach(people => {
    console.log(people);
});

console.log(peopleInvited[1] + " can't make it.");


peopleInvited[1] = "Umar";

peopleInvited.forEach(people => {
    console.log(people);
});


console.log("The dinner table is bigger. And I'm inviting more guests.");


peopleInvited.unshift("Ali");

peopleInvited.splice(Math.floor(peopleInvited.length / 2), 0, "Usman");

peopleInvited.push("Hamza");

peopleInvited.forEach(people => {
    console.log("Hello, " + people + " you are invited to the dinner.");
});