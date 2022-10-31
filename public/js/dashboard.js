// Event handler to add a new budget on dashboard
const newFormHandler = async (event) => {
    event.preventDefault();
  // Get values of name and budget limit and trim to remove unused spaces
    const name = document.querySelector('#budget-title').value.trim();
    const budget_limit = document.querySelector('#budget-sum').value.trim();

    // if required fields are missing fetch from api/budgets  
    if (name && budget_limit ) {
      const response = await fetch(`/api/budgets`, {
        method: 'POST',
        body: JSON.stringify({ name, budget_limit }),
        headers: {
          'Content-Type': 'application/json',
        },
    });
     // If required fields are ok then reroute to dashboard
    if (response.ok) {
        document.location.replace('/dash');
        // otherwise it will fail to save budget and alert
      } else {
        alert('Failed to save budget');
      }
    }
  };
// Event handler to delete a budget on dashboard
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/budgets/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dash');
      } else {
        alert('Failed to delete budget');
      }
    }
  };
  
// Call build-list handler
document
  .querySelector('.budget-list')
  .addEventListener('click', delButtonHandler);

