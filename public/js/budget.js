let confirmExpenseBtn = document.getElementById("confirm-expense-button");
confirmExpenseBtn.style.visibility = "hidden";

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

// Event handler to add new expense - let input's for new expenses appear
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

const confirmExpenseHandler = async (event) => {
  console.log("confirm button working");
  event.preventDefault();

  let expense_date = document.querySelector(".expense_date").value.trim();
  let expense_name = document.querySelector(".expense_name").value.trim();
  let expense_description = document
    .querySelector(".expense_description")
    .value.trim();
  let expense_amount = document.querySelector(".expense_amount").value.trim();
  let budget_id = 1;

  console.log(
    expense_date &&
      expense_name &&
      expense_description &&
      expense_amount &&
      budget_id
  );
  if (expense_date && expense_name && expense_amount) {
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

    if (response.ok) {
      console.log("======\n new expense created \n =============");
      document.location.replace(`/dash`);
    }
  }
};

document
  .getElementById("new-expense-button")
  .addEventListener("click", newExpenseHandler);

document
  .getElementById("confirm-expense-button")
  .addEventListener("submit", confirmExpenseHandler);
