          // Hamburger Functionality
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


          // ChatBot/Iframe
document.addEventListener("DOMContentLoaded", function () {
 // Get references to the icon and iframe elements
  var openIframeIcon = document.getElementById("open-iframe-icon");
  var iframeContainer = document.getElementById("iframe-container");
  var myIframe = document.getElementById("my-iframe");
        
// Set the source URL of the iframe
  myIframe.src = "https://console.dialogflow.com/api-client/demo/embedded/9b1bc75d-9724-4d18-80aa-37ee55d24133"; // Replace with your desired URL  // Add a click event listener to the icon
  openIframeIcon.addEventListener("click", function () {
 // Toggle the visibility of the iframe container
  if (iframeContainer.style.display === "none") {
  iframeContainer.style.display = "block";
  } else {
  iframeContainer.style.display = "none";
     }
   });
 });


            // Star Rating Functionality
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, index)=> {
    item.addEventListener('click', function () {

        ratingValue.value = index + 1
        console.log(ratingValue.value);

        allStar.forEach(i=> {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.remove('active')
        })
        for(let i=0; i<allStar.length; i++) {
            if(i <= index) {
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            }
        }
    })
});


    document.addEventListener("DOMContentLoaded", function () {
        // Get the form element
        const form = document.querySelector("form");

        // Add a submit event listener to the form
        form.addEventListener("submit", function (event) {
            // Get the form elements
            const fullNameInput = form.querySelector("input[placeholder='e.g: Simon Manthaka']");
            const numberOfGuestsInput = form.querySelector("input[placeholder='e.g: 5']");
            const selectMealInput = form.querySelector(".D-down");
            const contactNumberInput = form.querySelector("input[placeholder='e.g: 0123456789']");
            const orderDescriptionInput = form.querySelector("textarea");

                  // Initialize an object to store form data
              const formData = {
                fullName: fullNameInput.value.trim(),
                numberOfGuests: numberOfGuestsInput.value,
                selectMeal: selectMealInput.value,
                contactNumber: contactNumberInput.value,
                orderDescription: orderDescriptionInput.value.trim(),
            };

            // Initialize a variable to track whether the form is valid
            let isFormValid = true;

            // Check if the full name is not empty
            if (fullNameInput.value.trim() === "") {
                isFormValid = false;
                alert("Full Name is required.");
            }

            if (/\d/.test(fullNameInput.value)) {
              isFormValid = false;
              alert("Full Name cannot contain numbers.");
          }

            // Check if the number of guests is a valid number
            if (isNaN(Number(numberOfGuestsInput.value))) {
                isFormValid = false;
                alert("Number of Guests must be a valid number.");
            }

            // Check if a meal is selected
            if (selectMealInput.value === "") {
                isFormValid = false;
                alert("Please select a meal.");
            }

            // Check if the contact number is a valid phone number (you can add more complex validation)
            if (!/^\d{10}$/.test(contactNumberInput.value)) {
                isFormValid = false;
                alert("Contact Number is not valid.");
            }

            // Check if the order description is not empty
            if (orderDescriptionInput.value.trim() === "") {
                isFormValid = false;
                alert("Order Description is required.");
            }

            // If the form is not valid, prevent it from submitting
            if (!isFormValid) {
                event.preventDefault();
            }
            else {
              // Form is valid, show a success message
              alert("Form submission is successful!");

             // Reset the form to clear the fields
            form.reset();
            console.log(formData);

          }
         
        });
    });

    document.getElementById("submitButton").addEventListener("click", function () {
      var emailInput = document.getElementById("emailInput");
      var email = emailInput.value;
      if (validateEmail(email)) {
          alert("Thank you for subscribing to our newsletter: ");
          emailInput.value = ""; // Clear the input field
      } else {
          alert("Enter valid email address: " + email);
      }
  });

  function validateEmail(email) {
      // Basic email validation using a regular expression
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
  }
