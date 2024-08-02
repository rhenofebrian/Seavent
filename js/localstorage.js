const saveUserData = (firstName, lastName, email, password, country) => {
  const userData = {
    firstName,
    lastName,
    email,
    password,
    country,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Data has been saved to Local Storage");
};

//validasi user data saat login
const checkUserData = (email, password) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.email === email && userData.password === password) {
    alert("Login successful");
    return true;
  } else {
    alert("Invalid email or password");
    return false;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.getElementById("signUpBtn");
  const signInBtn = document.getElementById("signInBtn");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const countryButton = document.getElementById("country");

  let selectedCountry; //belum memilih negara

  //menjalankan fungsi dropdown
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedCountry = this.dataset.country; //Mengambil pilihan country(ID,US,EUR)
      countryButton.textContent = selectedCountry; // Update the button text
    });
  });

  // Event listener for sign up button
  if (signUpBtn) {
    signUpBtn.addEventListener("click", function () {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const countryButton = document.getElementById("country");

      // Get selected country
      //   const country = countryButton ? countryButton.innerText : selectedCountry;
      if (countryButton) {
        country = countryButton.textContent;
      } else {
        selectedCountry;
      }

      saveUserData(firstName, lastName, email, password, country);
      window.location.href = "login.html";
    });
  }

  // Event listener for sign in button
  if (signInBtn) {
    signInBtn.addEventListener("click", function () {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (checkUserData(email, password)) {
        window.location.href = "postSigninPage.html";
      }
    });
  }
});
