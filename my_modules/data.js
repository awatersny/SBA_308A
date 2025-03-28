import * as Potter from "./potter.js"

export const books = await Potter.getAll("books")
export const characters = await Potter.getAll("characters")
export const houses = await Potter.getAll("houses")
export const spells = await Potter.getAll("spells")