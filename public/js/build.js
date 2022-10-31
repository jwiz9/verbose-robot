
// Event handler to add a new budget
const budgetFormHandler = async (event) => {
    event.preventDefault();
  // Get values of name and budget limit and trim to remove unused spaces
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
  // If required fields are ok then reroute to dashboard
      if (response.ok) {
        document.location.replace('/dash');
        // otherwise it will fail to save budget and alert
      } else {
        
      }
    }
  };

  // Call build-form handler
  document
    .querySelector('.build-form')
    .addEventListener('submit', budgetFormHandler);
