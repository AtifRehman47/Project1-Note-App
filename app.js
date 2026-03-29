import { Logouthandler } from "./Firebase.js";

let userFile = document.querySelector('#file');
let Title = document.querySelector('.title');
let Description = document.querySelector('.description');
let Addbtn = document.querySelector('.add');

let Shownotes = document.querySelector('.shownotes');
let ul = document.querySelector('.ul')

Addbtn.addEventListener('click',()=>{

    if (!Title.value && !Description.value && !userFile.files[0] ) {
        alert('Please enter title, description or select a file')
        return
    }

    let File = userFile.files[0];
    let imgurl = '';

    if (File) {
        imgurl = URL.createObjectURL(File);
    }

    let noteDiv = document.createElement('div')
    noteDiv.classList.add('note')
    noteDiv.innerHTML = `
    ${imgurl ? `<img src="${imgurl}">` : ""}
    <h1>${Title.value}</h1>
    <p>${Description.value}</p>
    <div class="note-buttons">
    <button class='edit'>EditDescription</button>
    <button class='delete'>Delete</button>
    </div>
     `

     Shownotes.appendChild(noteDiv)

     Title.value = ''
     Description.value = ''
     userFile.value = ''

     
     let Delete = noteDiv.querySelector('.delete');
     Delete.addEventListener('click',()=>{
        noteDiv.remove()
     })

     let Edit = noteDiv.querySelector('.edit');
     Edit.addEventListener('click',()=>{
        Title.value = noteDiv.querySelector('h1').innerText
        Description.value = noteDiv.querySelector('p').innerText
        userFile.value = ''
        userFile.remove()
     })
     

})


// logoutworking 

let Logoutbtn = document.querySelector('.Logout')
Logoutbtn.addEventListener('click',()=>{
    Logouthandler()
})