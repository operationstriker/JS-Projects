const NoteDiv = document.getElementById("NoteDiv")
const AddNoteBTN = document.getElementById("AddNoteBTN");

function CreateNote() {
    NoteDiv.style.display = "block"
  const NewNote = document.createElement("div")
  NewNote.style.borderRadius = "4px"
  NewNote.style.height = "20vh";
  NewNote.style.width = "20%"
  NewNote.style.backgroundColor = "red"
  document.body.appendChild(NewNote);
}


function closeNote() {
    
    NoteDiv.remove()
}


