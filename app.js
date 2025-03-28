async function initialLoad() {
  const res = await fetch('https://potterapi-fedeperin.vercel.app/en/')
  console.log(await res.json())
}

initialLoad()