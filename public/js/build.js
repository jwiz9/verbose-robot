// const e = require("express");

const budgetFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const budget_limit = document.querySelector('#budget_limit').value.trim();
    if(!name){ 
      const nameWar = document.getElementById('nameL');
        nameWar.style.display = 'block'
    }
    if(!budget_limit){
    const budgetWar = document.getElementById('budgetL');
    budgetWar.style.display = 'block'
   }
    else if (name && budget_limit) {
      const response = await fetch('/api/budgets', {
        method: 'POST',
        body: JSON.stringify({ name, budget_limit }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dash');
      } else {
        
      }
    }
  };
  //added 
  // let needName = document.createElement('warrning')
  // needName.innerHTML='name';
  // needName.style.visibility = 'hidden';
  // const add = (event) => {

  // }
  
  // function IsEmpty() {
  //   if (document.forms['form-control'].question.value === "") {
  //     alert("empty");
  //     return false;
  //   }
  //   return true;
  // }
  
  
  
  
  
  
  document
    .querySelector('.build-form')
    .addEventListener('submit', budgetFormHandler);
