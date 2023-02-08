//Manipulando String e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. DEpois disso, transforme o array em um texto e onde eram espaços, coloque _



let phrase = "Eu quero viver a vida"
let myArray = phrase.split("")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
