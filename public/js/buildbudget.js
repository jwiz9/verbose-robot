const budgetFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    const name = document.querySelector('#name').value.trim();
    const amount = document.querySelector('#budget_limit').value.trim();
    const date = document.querySelector('#date').value.trim();
   
    if (name && amount && date) {
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/api/budgets', {
        method: 'POST',
        body: JSON.stringify({ date, amount, name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/budget');
      } else {
        alert('Failed to save budget');
      }
    }
  };
  
  document
    .querySelector('.build-form')
    .addEventListener('submit', budgetFormHandler);