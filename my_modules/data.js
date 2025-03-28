import * as Potter from "./potter.js"

export const info = await Potter.getAll()
export const books = await Potter.getAll("books")
export const characters = await Potter.getAll("characters")
export const houses = await Potter.getAll("houses")
export const spells = await Potter.getAll("spells")

export async function getCategories() {
  const info = await Potter.getAll()
  return info.routes.map(route => route.slice(4)[0].toUpperCase()+route.slice(5))
}
