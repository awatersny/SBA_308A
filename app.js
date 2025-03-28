import * as Data from "./my_modules/data.js"
import * as Potter from "./my_modules/potter.js"

const navbar = document.getElementById("navbar")

async function buildNavBar() {
  const categories = await Data.getCategories()
  categories.forEach(category => {
    const navEl = document.createElement("li")
    navEl.innerHTML = `<a href="#"><h2>${category}</h2></a>`
    const link = navEl.firstChild.firstChild
    navEl.firstChild.style.textDecoration = "none"
    navEl.firstChild.style.color = "brown"
    link.setAttribute("id", category.toLowerCase())
    link.addEventListener("click", renderCategory)
    navbar.appendChild(navEl)
  });
}

async function renderCategory(evt) {
  evt.preventDefault()
  const topic = await Potter.getAll(evt.target.id)
  console.log(topic)
}

buildNavBar()