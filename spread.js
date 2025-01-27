//permet d'appeler tous les elements d'un objet automatiquement
// affiche le Top 3 avec spread
let top3 =[
    "Tour eiffel",
    "Chatelet",
    "Republique Beaux Arts"
];
function showIte(place1,place2,place3){
    console.log("visite "+place1,);
    console.log("visite ensuite "+place2);
    console.log("visite enfin "+place3);
}
// manuellement
console.log("manuellemnt")
showIte(top3[0],top3[1],top3[2]);
//avec Spread
console.log("avec spread")
showIte(...top3);

// concatener deux tableaux avec spread
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// joindre deux elements

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4} 

// ajouter des nouveaux elements a un tableau existant

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


// Convertir une chaine de caratères en tableau

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Copiez un objet ou un tableau dans un autre objet ou tableau

// Objet
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// tableau

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)