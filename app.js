import * as Data from "./my_modules/data.js"

const navbar = document.getElementById("navbar")

{/* <li class="nav-element">
  <a href="#"><h2>Nav1</h2></a>
</li> */}
async function buildNavBar() {
  const categories = await Data.getCategories()
  categories.forEach(category => {
    const navEl = document.createElement("li")
    navEl.innerHTML = `<a href="#"><h2>${category}</h2></a>`
    navEl.firstChild.style.textDecoration = "none"
    navEl.firstChild.style.color = "brown"
    navbar.appendChild(navEl)
  });
}

buildNavBar()