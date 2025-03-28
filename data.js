export async function initialLoad() {
  const res = await fetch('https://potterapi-fedeperin.vercel.app/en/')
  return res.json()
}