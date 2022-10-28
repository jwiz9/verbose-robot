const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#budget-title').value.trim();
    const budget_limit = document.querySelector('#budget-sum').value.trim();

    if (name && budget_limit ) {
      const response = await fetch(`/api/budgets`, {
        method: 'POST',
        body: JSON.stringify({ name, budget_limit }),
        headers: {
          'Content-Type': 'application/json',
        },
    });
    
    if (response.ok) {
        document.location.replace('/budgets');
      } else {
        alert('Failed to save budget');
      }
    }
  };


const newBudgetForm = document.querySelector('.new-budget-form')
const buttonEl = document.querySelector('.budgetBtn');