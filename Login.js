
import { Loginhandler } from "./Firebase.js"

let email = document.querySelector('.email')
let password = document.querySelector('.password')
let Loginbtn = document.querySelector('.login')

Loginbtn.addEventListener('click',()=>{
        Loginhandler(email.value , password.value)
})