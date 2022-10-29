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
        document.location.replace('/dash');
      } else {
        alert('Failed to save budget');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/budgets/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dash');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

document
  .querySelector('.budget-list')
  .addEventListener('click', delButtonHandler);

