const loadButton = document.getElementById("loadButton");
const themeButton = document.getElementById("themeButton");

loadButton.addEventListener("click", loadProjects);
themeButton.addEventListener("click", changeTheme);

function loadProjects() {

    fetch("js/data.json")
.then(response => response.json())
.then(data => {
    const projectsContainer = document.getElementById("projects");
    let cards = "";
    data.forEach(project => {
cards += `
<article class="card">
<h3>${project.title}</h3>
<p>${project.description}</p>
<p class="details">${project.details}</p>
</article>
 `;
 });
projectsContainer.innerHTML = cards;
 });
}
function changeTheme() {
    document.body.classList.toggle("dark-theme");
}