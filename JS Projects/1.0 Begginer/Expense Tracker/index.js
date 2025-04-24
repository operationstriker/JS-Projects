const BudgetInput = document.getElementById("BudgetInput")
const ExpenseInput = document.getElementById("ExpenseInput")
const ExpenseAmountInput = document.getElementById("ExpenseAmountInput")
const BudgetResult = document.getElementById("BudgetResult")
const ExpenseResult = document.getElementById("ExpenseResult")

const BalanceResult = document.getElementById("BalanceResult")

function BudgetCalculate() {
    if (BudgetInput.value !== "") {
        BudgetResult.textContent = `$${BudgetInput.value}`
        syncfunction()
    }

}

function ExpenseCalculate() {
    if (ExpenseInput.value !== "") {
        ExpenseResult.textContent = `$${ExpenseAmountInput.value}`
        BalanceResult.textContent = `${BudgetInput.value - ExpenseAmountInput.value}`
        syncfunction()
    }
}

const ExpenseList = document.getElementById("ExpenseList");
const ExpenseUL = document.getElementById("ExpenseUL")

ExpenseUL.style.padding = "0px"

function syncfunction() {
    if (BudgetInput.value !== "" && ExpenseInput.value !== "" && ExpenseAmountInput.value !== "") {
        const list = document.createElement("li")
        list.style.backgroundColor = "rgba(201, 201, 201, 0.8)"
        // An RGB color value represents RED, GREEN, and BLUE light sources.
        //  An RGBA color value is an extension of RGB with an Alpha channel (opacity).
        list.style.marginBottom = "10px"
        list.style.left = "3%"
        list.style.height = "5vh";
        list.style.width = "95%"
        list.style.position = "relative";
        list.style.bottom = "5px"
        
    
        const p = document.createElement("p")
        p.style.margin = "0px"
        p.textContent = ExpenseInput.value
        p.style.position = "relative";
        p.style.left = "10%"
        p.style.bottom = "60%"


        const p2 = document.createElement("p")
        p2.style.margin = "0px"
        p2.textContent = ExpenseAmountInput.value
        p2.style.position = "relative";
        p2.style.left = "45%"
        p2.style.bottom = "100%"
    
    
        const imagesrc = document.createElement("img")
        imagesrc.style.position = "relative"
        imagesrc.style.left = "80%"
        imagesrc.src = "Images/Trash.png"
        imagesrc.style.height = "35px"
        imagesrc.style.cursor = "pointer"

        imagesrc.onclick = function() {
            list.remove()
            deletebutton.remove()
        }

        const imagesrc2 = document.createElement("img")
        imagesrc2.style.position = "relative"
        imagesrc2.src = "Images/Pen.png"
        imagesrc2.style.height = "35px"
        imagesrc2.style.left = "75%"
        imagesrc2.style.cursor = "pointer"
    
        ExpenseUL.appendChild(list)
        list.appendChild(imagesrc2)
        list.appendChild(imagesrc)
        list.appendChild(p)
        list.appendChild(p2)
        list.appendChild(deletebutton)
    }
}


// Local Storage - to save

// ExpenseObject = [BalanceResult.textContent, ExpenseResult.textContent]

// LOCALJSON = JSON.stringify(ExpenseObject)
// localStorage.setItem("Text", LOCALJSON)

// text = localStorage.getItem("Text")

// console.log(text)
