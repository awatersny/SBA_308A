import * as Data from "./my_modules/data.js"
import * as Potter from "./my_modules/potter.js"


buildNavBar()

async function buildNavBar() {
  const navbar = document.getElementById("navbar")
  const categories = await Data.getCategories()
  const langSelect = await buildLangSelect()
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
  navbar.appendChild(langSelect)
}

async function buildLangSelect() {
  const langSelect = document.createElement("select")
  const langs = await Data.getLanguages()
  langs.forEach(lang => {
    const option = document.createElement("option")
    option.value = lang
    option.textContent = lang
    langSelect.appendChild(option)
  })
  langSelect.addEventListener("change", Data.setLanguage)
  return langSelect
}

async function renderCategory(evt) {
  evt.preventDefault()
  const topic = await Potter.getAll(evt.target.id, Data.lang)
  console.log(topic)
}