const budgetFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const budget_limit = document.querySelector('#budget_limit').value.trim();
    const date = document.querySelector('#date').value.trim();
   
    if (name && budget_limit && date) {
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
