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

      const line = document.createElement("div")
      line.style.position = "relative"
      line.style.top = "5%"
      line.style.width = "100%"
      line.style.backgroundColor = "green"
      line.style.height = "20px"

      NewNote.appendChild(TitleText)
      NewNote.appendChild(line)
      NewNote.appendChild(DescriptionText)
      document.body.appendChild(NewNote);
    }
}


function closeNote() {
    NoteDiv.remove()
}
