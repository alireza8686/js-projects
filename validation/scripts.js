let form = document.querySelector(".form")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let see_password = document.querySelector("#see-password")

//regex
let up = /^[a-zA-Z][\w._]{5,23}/

let ep = 0;

form.addEventListener("submit" , e => {
    e.preventDefault()
})

form.Username.addEventListener("keyup" , e => {
    if (e.target.value) {
        username.textContent = e.target.value.toLowerCase()
        if (up.test(e.target.value)){
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        } else {
            e.target.classList.add("is-invalid")
        }
    } else {
        username.innerHTML = '<i> please write something </i>'
        e.target.classList.add("is-invalid")
    }
}) 

form.Password.addEventListener("keyup" , e => {
    if (e.target.value) {
        password.textContent = "*".repeat(e.target.value.length)
        see_password.textContent = e.target.value

        ep = 0;
        ep += /[A-Z]/.test(e.target.value) ? 1 : 0 ;
        ep += /[a-z]/.test(e.target.value) ? 1 : 0 ;
        ep += /[0-9]/.test(e.target.value) ? 1 : 0 ;
        ep += /[\W]/.test(e.target.value) ? 1 : 0 ;
        ep += e.target.value.length >= 6 ? 1 : 0 ;

        if (ep === 5) {
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
        } else {
            e.target.classList.add("is-invalid")
        }
    } else {
        password.innerHTML = '<i> please select password </i>'
    }
}) 


