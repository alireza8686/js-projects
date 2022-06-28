let themes = document.querySelector(".theme")

let selectedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark" ;
document.body.className = selectedTheme ;

Array.from(themes.children).forEach(theme => {
    theme.addEventListener("click", e => {
        let color = e.target.dataset.color
        document.body.className = color
        localStorage.setItem("theme" , color)
    })
})

