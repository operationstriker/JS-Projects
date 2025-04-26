//GET- display User
// CREATE - create user
// UPDATE - update user
// DELETE - delete user

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json()) // .json - converts
.then(data => {
    document.getElementById("p").innerHTML = data[5].address.street
})

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: 'DELETE'
// })
// .then(res => res.json()) // .json - converts
// .then(data => {
//     document.getElementById("p").innerHTML = data[0].name
// })

// fetch - make url requests
// then