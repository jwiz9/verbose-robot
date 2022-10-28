console.log("testing");
const newExpenseHandler = (event) => {
  console.log("hello");

  let newExpenseRow = document.createElement("tr");
  let expenseTableData1 = document.createElement("td");
  let expenseTableData2 = document.createElement("td");
  let expenseTableData3 = document.createElement("td");
  let expenseTableData4 = document.createElement("td");
  expenseTableData4.innerHTML = "test";

  newExpenseRow.append(
    expenseTableData1,
    expenseTableData2,
    expenseTableData3,
    expenseTableData4
  );

  let totalsum = document.getElementById("total-sum");

  totalsum.prepend(newExpenseRow);

  //   variables to create html elements and the inputs
  // row
  // append TD elements
  // prepend the entire row - to the entire row

  // add button - to make the function of OK - that would prompt fetch of backend post
};

document
  .getElementById("new-expense-button")
  .addEventListener("click", newExpenseHandler);
