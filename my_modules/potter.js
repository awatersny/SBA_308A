const BASE_URL = "https://potterapi-fedeperin.vercel.app"

export async function getAll(category = '', lang = "en") {
  const res = await fetch(`${BASE_URL}/${lang}/${category}`)
  const data = await res.json()
  return data
}