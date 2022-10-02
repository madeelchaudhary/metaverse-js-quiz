const peopleInvited = ["Arslan", "Zeshan", "Husnain"];

peopleInvited.forEach(people => {
    console.log(people);
});

console.log(peopleInvited[1] + " can't make it.");


peopleInvited[1] = "Umar";

peopleInvited.forEach(people => {
    console.log(people);
});