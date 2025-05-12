const Input = document.getElementById("Input")


function getlink() {

    if (Input.value !== "") {
   const NewDiv = document.createElement("div")
   NewDiv.id = "NewDiv"
  NewDiv.innerText = Input.value
   document.body.appendChild(NewDiv)
    }
}






