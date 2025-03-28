const BASE_URL = "https://potterapi-fedeperin.vercel.app"

export async function getAll(category = '') {
  const res = await fetch(`${BASE_URL}/en/${category}`)
  const data = await res.json()
  return data
}