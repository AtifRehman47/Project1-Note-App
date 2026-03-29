
import { Signuphandler } from "./Firebase.js"

let userName = document.querySelector('.name')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let Signupbtn = document.querySelector('.signup')

Signupbtn.addEventListener('click',()=>{
    Signuphandler( email.value , password.value)
})