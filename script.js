document.addEventListener("DOMContentLoaded", () => {
  //Accessing form elements
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //Retrieving input values
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    console.log(username);
    console.log(email);
    console.log(password);

    //Validation logic
    let isValid = true;
    let messages = [];
    //Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be greater than 3");
    }
    //Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email is not valid");
    }

    //Password validation
    if (!(password.length >= 8)) {
      isValid = false;
      messages.push("Password must be at least 8 characters long");
    }

    //Feedback display logic
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
