// Function to manage user lotout
const logout = async () => {
  
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // Once logged out - redirect to home/login page
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};
// Call logout function on user logout
document.querySelector('#logout').addEventListener('click', logout);