const formValidation = (() => {
  const myPassword = document.getElementById("password");
  const myConfirmation = document.getElementById("confirm");
  const myZip = document.getElementById("zipcode");
  const myEmail = document.getElementById("email");

  const validateForm = () => {
    const validateEmail = () => {
      myEmail.reportValidity();
    };

    const validateZip = () => {
      //regex to check for zipcode
      const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

      if (re.test(myZip.value)) {
        myZip.setCustomValidity("");
        myZip.reportValidity();
      } else {
        myZip.setCustomValidity("Please enter a valid numeric Zipcode");
        myZip.reportValidity();
      }
    };

    const validatePassword = () => {
      //regex to check for min 8 characters, 1 upper, 1 lower, 1 special, 1 number
      const re = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

      if (myPassword.value === myConfirmation.value) {
        myConfirmation.setCustomValidity("");
        myConfirmation.reportValidity();
      } else {
        myConfirmation.setCustomValidity("Password does not match");
        myConfirmation.reportValidity();
      }

      if (re.test(myPassword.value)) {
        myPassword.setCustomValidity("");
        myPassword.reportValidity();
      } else {
        myPassword.setCustomValidity(
          "Password does not meet complexity requirements"
        );
        myPassword.reportValidity();
      }
    };

    validateEmail();
    validateZip();
    validatePassword();
  };

  document.querySelector("button").addEventListener("click", validateForm);
})();
