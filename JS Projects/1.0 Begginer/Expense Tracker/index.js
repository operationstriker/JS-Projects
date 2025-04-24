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

function syncfunction() {
    const list = document.createElement("li")
    list.style.backgroundColor = "red"
    list.style.marginBottom = "10px"
    list.style.height = "auto";
    list.style.width = "95%"
    list.style.position = "relative";
    list.style.bottom = "5px"

    const p = document.createElement("p")
    p.textContent = ExpenseInput.value

    const deletebutton = document.createElement("button")
    deletebutton.style.backgroundColor = "blue"

    deletebutton.onclick = function() {
        list.remove();
        deletebutton.remove()
    }

    ExpenseUL.appendChild(list)
    list.appendChild(p)
    list.appendChild(deletebutton)
}


// Local Storage - to save

// ExpenseObject = [BalanceResult.textContent, ExpenseResult.textContent]

// LOCALJSON = JSON.stringify(ExpenseObject)
// localStorage.setItem("Text", LOCALJSON)

// text = localStorage.getItem("Text")

// console.log(text)


