import * as Data from "./data.js"

const books = await Data.getAll("books")
const characters = await Data.getAll("characters")
const houses = await Data.getAll("houses")
const spells = await Data.getAll("spells")
console.log(books)
console.log(characters)
console.log(houses)
console.log(spells)