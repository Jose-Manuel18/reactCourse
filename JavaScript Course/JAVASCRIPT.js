let persons = [
  { name: "Jose", age: 22 },
  { name: "Martena", age: 33 },
  { name: "Laura", age: 23 },
  { name: "Laura", age: 23 },
  { name: "juan", age: 45 },
  { name: "Yohanna", age: 55 },
  { name: "Carlos", age: 29 },
];
let age = persons.filter((person) => person.age === 23);

// let age = persons.filter(function (person) {
//   return person.age === 23 && person.name === "Laura";
// });

let map_name = persons.map((person) => person.name + " tiene " + person.age + " años"
);

// let animals = ['Laurita']
// for (let i = 0; i < persons.length; i++) {
//   animals.push(persons[i].name);
// }
let reduce_age = persons.reduce((sum, ages) => sum + ages.age, 0);
//the 0 is for the starting point of the sum calculation.

// let reduce_age = 0
// for (let i = 0; i < persons.length; i++) {
//   reduce_age += persons[i].age;
// }
let me = "Jose Mendez";
function meetMe() {
  console.log("hello, " + me + "!");
}
meetMe(); // siempre que quiero console.log una function tengo que llamarla aqui

function sendMessage() {
  let requestID = "123";
  $.ajax({
    url: "/myurl",
    success: function (response) {
      alert("Request" + requestID + " returned");
    },
  });
}
let dragon = (nombre, size, element) =>
  nombre + " is a " + size + " dragon that breathes " + element + "!";
console.log(dragon("jose", "bigdragon", "water"));

let counter = 0;
function incrementButton() {
  counter += 1;
  document.getElementById("numberDisplayed").innerHTML = counter;
}
function decrementButton() {
  if(counter>0){
    counter -= 1;
    document.getElementById("numberDisplayed").innerHTML = counter;
    
  }
  
}

console.log(reduce_age);
console.log(map_name);
console.log(age);
