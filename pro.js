// Alert when 'Find a Pet' button is clicked
document.getElementById("findPetBtn").addEventListener("click", function () {
    alert("Redirecting you to search for pets! 🐶🐱");
});

// Alert when 'Learn How to Adopt' button is clicked
document.getElementById("learnAdoptBtn").addEventListener("click", function () {
    alert("Learn about our easy adoption process!");
});

// Handle form submission
document.getElementById("searchBtn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form from submitting
    alert("Searching for pets... Please wait!");
});

// Handle 'Adopt Me' button clicks for featured pets
const adoptButtons = document.querySelectorAll(".adoptBtn");
adoptButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Thank you for choosing adoption! We'll connect you with the shelter soon. ❤️");
    });
});

