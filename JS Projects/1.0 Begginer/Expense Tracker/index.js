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
        ExpenseResult.textContent = `$${ExpenseInput.value}`
        BalanceResult.textContent = `${BudgetInput.value - ExpenseInput.value}`
    }
}





