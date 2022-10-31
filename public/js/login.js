// Event handler to manage user login
const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (!email || !password) {
    const signinWarning = document.getElementById("signinWarning");
    signinWarning.style.display = "block";
  } else if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dash");
    } else {
      signinWarning.style.display = "block";
    }
  }
};

// Event handler to manage new user account creation
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dash");
    } else {
      const accountWarning = document.getElementById("newAccountWarning");
      accountWarning.style.display = "block";
    }
  } else {
    accountWarning = document.getElementById("newAccountWarning");
    accountWarning.style.display = "block";
  }
};

// Call Login Form Handler on existing user login
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

//Call Sign Up Form Handler on new user signup
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
