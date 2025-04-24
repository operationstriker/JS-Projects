const BudgetInput = document.getElementById("BudgetInput")
const ExpenseInput = document.getElementById("ExpenseInput")
const ExpenseAmountInput = document.getElementById("ExpenseAmountInput")
const BudgetResult = document.getElementById("BudgetResult")
const ExpenseResult = document.getElementById("ExpenseResult")

const BalanceResult = document.getElementById("BalanceResult")

function BudgetCalculate() {
    if (BudgetInput.value !== "") {
        BudgetResult.textContent = `$${BudgetInput.value}`
    }

}

function ExpenseCalculate() {
    if (ExpenseInput.value !== "") {
        ExpenseResult.textContent = `$${ExpenseAmountInput.value}`
        BalanceResult.textContent = `${BudgetInput.value - ExpenseAmountInput.value}`
    }
}

// Local Storage - to save

// ExpenseObject = [BalanceResult.textContent, ExpenseResult.textContent]

// LOCALJSON = JSON.stringify(ExpenseObject)
// localStorage.setItem("Text", LOCALJSON)

// text = localStorage.getItem("Text")

// console.log(text)


