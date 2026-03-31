import { Logouthandler } from "./Firebase.js";

let userFile = document.querySelector('#file');
let Title = document.querySelector('.title');
let Description = document.querySelector('.description');
let Addbtn = document.querySelector('.add');

let Shownotes = document.querySelector('.shownotes');


let notes = JSON.parse(localStorage.getItem('notes')) || [];


window.addEventListener('DOMContentLoaded', () => {
    notes.forEach((note) => {
        createNote(note.title, note.description, note.img);
    });
});

Addbtn.addEventListener('click', () => {

    if (!Title.value && !Description.value && !userFile.files[0]) {
        alert('Please enter title, description or select a file')
        return
    }

    let File = userFile.files[0];
    let imgurl = '';

    if (File) {
        imgurl = URL.createObjectURL(File);
    }

    
    notes.push({
        title: Title.value,
        description: Description.value,
        img: imgurl
    });

    localStorage.setItem('notes', JSON.stringify(notes));

    
    createNote(Title.value, Description.value, imgurl);

    Title.value = ''
    Description.value = ''
    userFile.value = ''
});



function createNote(title, description, imgurl) {

    let noteDiv = document.createElement('div')
    noteDiv.classList.add('note')
    noteDiv.innerHTML = `
    ${imgurl ? `<img src="${imgurl}">` : ""}
    <h1>${title}</h1>
    <p>${description}</p>
    <div class="note-buttons">
    <button class='edit'>EditDescription</button>
    <button class='delete'>Delete</button>
    </div>
     `

    Shownotes.appendChild(noteDiv)

    let Delete = noteDiv.querySelector('.delete');
    Delete.addEventListener('click', () => {
        noteDiv.remove();

        
        notes = notes.filter(n => !(n.title === title && n.description === description));
        localStorage.setItem('notes', JSON.stringify(notes));
    });

    let Edit = noteDiv.querySelector('.edit');
    Edit.addEventListener('click', () => {
        Title.value = noteDiv.querySelector('h1').innerText
        Description.value = noteDiv.querySelector('p').innerText

        
        notes = notes.filter(n => !(n.title === title && n.description === description));
        localStorage.setItem('notes', JSON.stringify(notes));

        noteDiv.remove();
    });
}


// logoutworking 
let Logoutbtn = document.querySelector('.Logout')
Logoutbtn.addEventListener('click', () => {
    Logouthandler()
})