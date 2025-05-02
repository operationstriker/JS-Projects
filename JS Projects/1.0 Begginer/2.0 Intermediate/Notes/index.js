const NoteDiv = document.getElementById("NoteDiv");
const AddNoteBTN = document.getElementById("AddNoteBTN");
const TitleInput = document.getElementById("TitleInput");
const DescriptionInput = document.getElementById("DescriptionInput");

function OpenNote() {
    NoteDiv.style.display = "block" // when you click always display block
}

function CreateNote() {
    if (TitleInput.value != "" && DescriptionInput.value != "") {
      const NewNote = document.createElement("div")
      NewNote.style.position = "relative"
      NewNote.style.borderRadius = "4px"
      NewNote.style.height = "auto";
      NewNote.style.width = "20%"
      NewNote.style.backgroundColor = "white"

      const TitleText = document.createElement("p")
      TitleText.textContent = `${TitleInput.value}`
      TitleText.style.fontWeight = "bold"

      const DescriptionText = document.createElement("p")
      DescriptionText.textContent = `${DescriptionInput.value}`
      DescriptionText.style.marginBottom = "20px"
      DescriptionText.style.bottom = "10px";

      const line = document.createElement("div")
      line.style.position = "relative"
      line.style.top = "5%"
      line.style.width = "100%"
      line.style.backgroundColor = "green"
      line.style.height = "20px"

      const editbutton = document.createElement("button")
      editbutton.style.backgroundColor = "orange";
      editbutton.style.height = "30px"
      editbutton.style.cursor = "pointer"

      editbutton.addEventListener("click", () => {
        DescriptionText.style.type = "input"
      })
      

      const deletebutton = document.createElement("button")
      deletebutton.style.backgroundColor = "red"
      deletebutton.style.cursor = "pointer"

      deletebutton.addEventListener("click", () => {
        NewNote.remove();
      })

      const date = new Date()

      switch(date) {
        case 1:
            yeartext.textContent =  `${date.getFullYear()} January` 
            break;
        case 2:
            yeartext.textContent =  `${date.getFullYear()} February` 
            break;
        case 3:
            yeartext.textContent =  `${date.getFullYear()} March`
            break;
        case 4:
            yeartext.textContent =  `${date.getFullYear()} April`
            break;
        case 5:
            yeartext.textContent =  `${date.getFullYear()} May`
            break;
        case 6:
            yeartext.textContent =  `${date.getFullYear()} June` 
            break;
        case 7:
            yeartext.textContent =  `${date.getFullYear()} July` 
            break;
        case 8:
            yeartext.textContent =  `${date.getFullYear()} August`
            break;
        case 9:
            yeartext.textContent =  `${date.getFullYear()} September`
            break;
        case 10:
            yeartext.textContent =  `${date.getFullYear()} October`
            break;
        case 11:
            yeartext.textContent =  `${date.getFullYear()} November`
            break;
        case 12:
             yeartext.textContent =  `${date.getFullYear()} December` 
            break;    
      }

      const yeartext = document.createElement("p")
      yeartext.textContent =  `${date.getFullYear()}` + ` ${date.getMonth()}`
      
      NewNote.appendChild(editbutton);
      NewNote.appendChild(deletebutton);
      NewNote.appendChild(yeartext);
      NewNote.appendChild(TitleText);
      NewNote.appendChild(line);
      NewNote.appendChild(DescriptionText);
      document.body.appendChild(NewNote);
    }
}

function closeNote() {
    NoteDiv.remove()
}
