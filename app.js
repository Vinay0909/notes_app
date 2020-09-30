showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e) {

    let addTxt = document.getElementById("addTxt");
    let addtitle = document.getElementById('inputtitle');
    let notes = localStorage.getItem("notes");  
    if(notes == null) {
        notesObj = [];    
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title:addtitle.value,
        text:addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";    
    addTxt.value="";                   
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");  
    if(notes == null) {
        notesObj = [];    
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(element, index){
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>`
    })
    let noteselm = document.getElementById('notes');
    if(notesObj.length != 0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML =`Nothing to show use "Add a note above to display the content."`;
    }
}

//for deleting the note

function deleteNote(index){
    let notes = localStorage.getItem("notes");  
    if(notes == null) {
        notesObj = [];    
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//for searching the notes

let search = document.getElementById('searchTxt');
search.addEventListener("input",function() {
    
    let inputval = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})