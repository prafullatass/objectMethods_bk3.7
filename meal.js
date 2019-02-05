// Lightning Exercise 1: Create an object to represent your favorite dinner item 
// (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, 
// but you can add any other properties that you like, such as size, weight, ethnicity,
//  vegetarian boolean.

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> 
// element with a class of food.

const meals = [
    {
        menu: "meatloaf",
        size: "small",
        weight: "300gm",
        vegeterian: false
    },
    {
        menu: "spaghetti",
        size: "big bowl",
        weight: "500gm",
        vegeterian: false
    },
    {
        menu: "fried fish",
        size: "small",
        weight: "100gm",
        vegeterian: true
    }
]
//console.log(Object.entries(meals[0]))
$(".food").innerHTML += "<h2> Dinner Menu </h2>"
meals.forEach(meal => {
    $(".food").innerHTML += "<section>"
    for (const entry of Object.entries(meal)) {
        $(".food").innerHTML += `<div> ${entry[0]} : ${entry[1]}`
        console.log(entry[0], entry[1])
    }
    $(".food").innerHTML += "</section> <hr/>"
});