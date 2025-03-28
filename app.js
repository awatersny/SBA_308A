import axios from "axios";

async function initialLoad() {
  const res = await axios.get('https://potterapi-fedeperin.vercel.app/en/')
  console.log(res.data)
}

initialLoad()