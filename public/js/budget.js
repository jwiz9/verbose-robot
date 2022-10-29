let confirmExpenseBtn = document.getElementById("confirm-expense-button");
confirmExpenseBtn.style.visibility = "hidden";

let budget_id = document.getElementById("budget-id").getAttribute("data-id");
console.log(budget_id);

let totalBudget = document
  .querySelector(".budget-summary")
  .getAttribute("data-budget");
console.log(totalBudget);

let newExpenseRow = document.createElement("tr");
let expensetd1 = document.createElement("td");
let td1Input = document.createElement("input");
td1Input.classList.add("expense_date");
let expensetd2 = document.createElement("td");
let td2Input = document.createElement("input");
td2Input.classList.add("expense_name");
let expensetd3 = document.createElement("td");
let td3Input = document.createElement("input");
td3Input.classList.add("expense_description");
let expensetd4 = document.createElement("td");
let td4Input = document.createElement("input");
td4Input.classList.add("expense_amount");
let sumTotal = 0;
let totalArray = [];
let sum = 0;

let allExpense = document.querySelectorAll(".expense-amount");

allExpense.forEach((element) => {
  totalArray.push(element.innerHTML * 1);
  console.log(typeof totalArray[0]);
});

console.log(totalArray);

totalArray.forEach((element) => (sum += element));
// for (let i = 0; i < totalArray.length; i++) {
//   sum += totalArray[i] * i;
// }
console.log(sum);
const calulatedExpenses = (document.getElementById(
  "calculatedExpenses"
).innerHTML = sum.toFixed(2));

let expensesSummary = (document.querySelector(
  ".expense-summary"
).innerHTML = `$ ${sum.toFixed(2)}`);

let remainingAmount = totalBudget - sum;
console.log(remainingAmount);
let remainingSummary = (document.querySelector(
  ".remaining-summary"
).innerHTML = `$ ${remainingAmount.toFixed(2)}`);

// PROMPT TO ADD NEW EXPENSE
const newExpenseHandler = (event) => {
  console.log("hello");

  expensetd1.append(td1Input);
  expensetd2.append(td2Input);
  expensetd3.append(td3Input);
  expensetd4.append(td4Input);
  newExpenseRow.append(expensetd1, expensetd2, expensetd3, expensetd4);

  let newExpense = document.getElementById("new-expense");
  confirmExpenseBtn.style.visibility = "visible";

  newExpense.append(newExpenseRow);
};

// CONFIRM ADDITION OF NEW EXPENSE
const confirmExpenseHandler = async (event) => {
  console.log("confirm button working");
  event.preventDefault();

  let expense_date = document.querySelector(".expense_date").value.trim();
  let expense_name = document.querySelector(".expense_name").value.trim();
  let expense_description = document
    .querySelector(".expense_description")
    .value.trim();
  let expense_amount = document.querySelector(".expense_amount").value.trim();

  console.log(
    "is this working======????=====" +
      expense_date +
      expense_name +
      expense_description +
      expense_amount +
      budget_id
  );

  if (expense_date && expense_name && expense_amount && budget_id) {
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
    console.log("======\n we got your expense request \n =============");
    console.log(response);

    if (response.ok) {
      console.log("======\n new expense created \n =============");
      document.location.replace(`/dash/budget/${budget_id}`);
    }
  }
};

// const delButtonHandler = async (event) => {
//   const response = await fetch(`/dash/api/budget/${budget_id}`, {
//     method: "DELETE",
//   });
//   console.log("=======delete response received======");
//   console.log(response);
//   if (response.ok) {
//     document.location.replace("/dash");
//   } else {
//     alert(response.statusText);
//   }
// };

// COMMENT DELETE FUNCTION
const delExpenseHandler = async (event) => {
  console.log("functioning expense delete button");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/expense/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/dash/budget/${budget_id}`);
    } else {
      alert("Failed to delete expense");
    }
  }
};

document
  .getElementById("new-expense-button")
  .addEventListener("click", newExpenseHandler);

document
  .getElementById("confirm-expense-button")
  .addEventListener("click", confirmExpenseHandler);

// document
//   .getElementById("delete-button")
//   .addEventListener("click", delButtonHandler);

let deleteBtns = document.getElementsByClassName("delete-expense-button");
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", delExpenseHandler);
}
// .addEventListener("click", delExpenseHandler);
