// Establish Global Variables
let confirmExpenseBtn = document.getElementById("confirm-expense-button");
confirmExpenseBtn.style.visibility = "hidden";

let budget_id = document.getElementById("budget-id").getAttribute("data-id");

let totalBudget = document
  .querySelector(".budget-summary")
  .getAttribute("data-budget");

// Create New Expense Input Table Row with inputs to eneter new expenses
let newExpenseRow = document.createElement("tr");
newExpenseRow.setAttribute("scope", "row");
let btnPlaceholder = document.createElement("td");

let expensetd1 = document.createElement("td");
let td1Input = document.createElement("input");
td1Input.classList.add("expense_date", "form-control");
td1Input.setAttribute("type", "text");
td1Input.setAttribute("id", "datepicker");
td1Input.setAttribute("placeholder", "select date");

let expensetd2 = document.createElement("td");
let td2Input = document.createElement("input");
td2Input.classList.add("expense_name", "form-control");
td2Input.setAttribute("placeholder", "expense");

let expensetd3 = document.createElement("td");
let td3Input = document.createElement("input");
td3Input.classList.add("expense_description", "form-control");
td3Input.setAttribute("placeholder", "description");

let expensetd4 = document.createElement("td");
let td4Input = document.createElement("input");
td4Input.classList.add("expense_amount", "form-control");
td4Input.setAttribute("placeholder", "amount");

// Create Input Warning Row - mark visibility as hidden
let warningRow = document.createElement("tr");
warningRow.classList.add("font-italic", "text-danger");
let warningBtnPlaceholder = document.createElement("td");

let td1Warning = document.createElement("td");
td1Warning.innerHTML = "missing date";
td1Warning.style.visibility = "hidden";

let td2Warning = document.createElement("td");
td2Warning.innerHTML = "enter an expense";
td2Warning.style.visibility = "hidden";

let td3Warning = document.createElement("td");

let td4Warning = document.createElement("td");
td4Warning.innerHTML = "enter an amount";
td4Warning.style.visibility = "hidden";

// Establish variables to complete budget stat calculations
let totalArray = [];
let sum = 0;

// Get all exepenses in current expense table and save in array
let allExpense = document.querySelectorAll(".expense-amount");

// For each element in the all expenses array - take the string number and multiple by 1 to get number data type. Push numbers into totalArray
allExpense.forEach((element) => {
  totalArray.push(element.innerHTML * 1);
});

// Loop over all numbers in Total Array. Calculate sum of all numbers and hold in sum variable
totalArray.forEach((element) => (sum += element));

// Access total expenses at bottom of HTML budget table - set innerHTML to sum variable, to fixed decimal place
const calulatedExpenses = (document.getElementById(
  "calculatedExpenses"
).innerHTML = `$ ${sum.toFixed(2)}`);

// Access expenses summary box at top of HTML page - set innerHTML to sum variable to fixed decimal place
let expensesSummary = (document.querySelector(
  ".expense-summary"
).innerHTML = `$ ${sum.toFixed(2)}`);

// Calculate remaining total of budget using budget total - sum.
let remainingAmount = totalBudget - sum;
// Access remaining total box at the top of HTML page - set innerHTML to remaning amount to fixed decimal place
let remainingSummary = (document.querySelector(
  ".remaining-summary"
).innerHTML = `$ ${remainingAmount.toFixed(2)}`);

// Event Handler to add new expense
const newExpenseHandler = (event) => {
  // Append components of new expense request row
  expensetd1.append(td1Input);
  expensetd2.append(td2Input);
  expensetd3.append(td3Input);
  expensetd4.append(td4Input);
  newExpenseRow.append(
    btnPlaceholder,
    expensetd1,
    expensetd2,
    expensetd3,
    expensetd4
  );
  warningRow.append(
    warningBtnPlaceholder,
    td1Warning,
    td2Warning,
    td3Warning,
    td4Warning
  );

  // Datepicker
  $(function () {
    $("#datepicker").datepicker();
  });

  // Access confirm expense button - set visibility to visible
  let newExpense = document.getElementById("new-expense");
  confirmExpenseBtn.style.visibility = "visible";

  // Append newly created expense to table of expenses
  newExpense.append(newExpenseRow, warningRow);
};

// Event Handler to confirm addition of new expense
const confirmExpenseHandler = async (event) => {
  event.preventDefault();

  // Get values of all expense detail entries - and trim to remove unused spaces
  let expense_date = document.querySelector(".expense_date").value.trim();
  let expense_name = document.querySelector(".expense_name").value.trim();
  let expense_description = document
    .querySelector(".expense_description")
    .value.trim();
  let expense_amount = document.querySelector(".expense_amount").value.trim();

  // If required fields are missing - hidden input warning will be visible.
  // If all required elements are inlcuded - send fetch request to complete POST
  if (!expense_date) {
    td1Warning.style.visibility = "visible";
  } else if (!expense_name) {
    td2Warning.style.visibility = "visible";
  } else if (!expense_amount) {
    td4Warning.style.visibility = "visible";
  } else if (expense_date && expense_name && expense_amount && budget_id) {
    const response = await fetch(`/api/expense`, {
      method: "POST",
      body: JSON.stringify({
        expense_date,
        expense_name,
        expense_description,
        expense_amount,
        budget_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    // If response is OK - redirect to updated budget page showing new expense
    if (response.ok) {
      document.location.replace(`/dash/budget/${budget_id}`);
    }
  }
};

// Event handler to delete an expense
const delExpenseHandler = async (event) => {
  // Event target must have data-id that matches the expense ID - to fetch DELETE request of specified expense with the matching id
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/expense/${id}`, {
      method: "DELETE",
    });
    // If response if OK - redirect to updated budget page with expense removed
    if (response.ok) {
      document.location.replace(`/dash/budget/${budget_id}`);
    } else {
      alert("Failed to delete expense");
    }
  }
};

// Call New Expense Handler
document
  .getElementById("new-expense-button")
  .addEventListener("click", newExpenseHandler);

// Call Confirm Expense Handler
document
  .getElementById("confirm-expense-button")
  .addEventListener("click", confirmExpenseHandler);

// Loop through all delete buttons within the expense chart and add an event handler - when clicked call delete Expense Function
let deleteBtns = document.getElementsByClassName("delete-expense-button");
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", delExpenseHandler);
}
