// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// -----COMPLETE-----1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function that determines if a given temp is below boiling point (bp<212), at boiling point (=212), or above boiling point (bp>212)
var boilingPoint = (temp) => {
    if (temp<212) {
        return (`${temp} is below boiling point`)
    } else if (temp>212) {
        return (`${temp} is above boiling point`)
    } else{
        return (`${temp} is at boiling point`)
    }
}

console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));

// ----COMPLETE------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

//create function that multiplies each number in array by 5 using a for loop

var myNumbers1 = [3, 7, 0, 6, -9]

for(let i=0; i<myNumbers1.length; i++) {
    console.log(myNumbers1[i] *5)
}

// -----COMPLETE-----3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
//create a function that multiplies each number in the array by 5 using map
var newArr = myNumbers2.map(function(value) {
    return value * 5
})
console.log (newArr)

// -----COMPLETE------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent";
var newarrayWithVowels1 = stringWithVowels1.split("");
var stringWithVowels2 = "ILoveJavaScript";
var newarrayWithVowels2 = stringWithVowels2.split("");
// create a function that removes all vowels from a string
const noVowels1 =newarrayWithVowels1.filter(x => x !=="a" && x!=="e" && x!=="i" && x!=="o" && x!=="u")
const noVowels2 =newarrayWithVowels2.filter(x => x !=="a" && x!=="e" && x!=="i" && x!=="o" && x!=="u" && x!=="I")
//Expected output: "HyThrLrnStdnt"
console.log(noVowels1.join(""));
//Expected output: "LvJvScrpt"
console.log(noVowels2.join(""));



// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

//inform user if variable passed into vowel remove function is not a string
var stringDeterminer = (test) => {
    if (test === "boolean") {
        return ("The variable is not a string it is a boolean.")
    } else  {
        return ("The variable is not a string it is a number.")
    }
    }
console.log(stringDeterminer(typeof notAString1))
console.log(stringDeterminer(typeof notAString2))




// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, 
                {name: "Stimpy", animal: "cat"}, 
                {name: "Daffy", animal: "duck"}, 
                {name: "Scratchy", animal: "cat"}, 
                {name: "Ren", animal: "dog"}, 
                {name: "Felix", animal: "cat"}]

var animal = toonimals.filter(value => value.animal === "cat")
console.log(animal)

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var animal2 = toonimals.filter(value => value.animal !== "cat") 
var animalName = animal2.map((x)=>x.name);
console.log(animalName)

