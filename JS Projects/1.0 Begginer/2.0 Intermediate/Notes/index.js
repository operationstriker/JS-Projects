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

      const date = new Date()
      

      const monthtext = document.createElement("p")
      monthtext.textContent = date.getMonth()


      switch(date.getMonth()) {
        case 1:
            monthtext.textContent = "January"
            break;
        case 2:
            monthtext.textContent = "February"
            break;
        case 3:
            monthtext.textContent = "March"
            break;
        case 4:
            monthtext.textContent = "April"
            break;
        case 5:
            monthtext.textContent = "May"
            break;
        case 6:
            monthtext.textContent = "June"
            break;
        case 7:
            monthtext.textContent = "July"
            break;
        case 8:
            monthtext.textContent = "August"
            break;
        case 9:
            monthtext.textContent = "September"
            break;
        case 10:
            monthtext.textContent = "October"
            break;
        case 11:
            monthtext.textContent = "November"
            break;
        case 12:
            monthtext.textContent = "December"
            break;    
      }

      const yeartext = document.createElement("p")
      yeartext.textContent =  date.getFullYear() 
      
      NewNote.appendChild(monthtext)
      NewNote.appendChild(yeartext);
      NewNote.appendChild(TitleText)
      NewNote.appendChild(line)
      NewNote.appendChild(DescriptionText)
      document.body.appendChild(NewNote);
    }
}


function closeNote() {
    NoteDiv.remove()
}
