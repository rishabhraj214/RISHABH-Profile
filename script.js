
// Get HTML Elements
const card = document.getElementById("profile-card");
const themeButton = document.getElementById("theme-button");
const statusButton = document.getElementById("status-button");
const statusText = document.getElementById("status-text");
const followButton = document.getElementById("follow-button");
const followCount = document.getElementById("follow-count");

// Toggle Dark Mode
themeButton.addEventListener("click", function () {
    card.classList.toggle("dark-mode");
});

// Change Status
statusButton.addEventListener("click", function () {

    if (statusText.textContent.trim() === "Status: Available for Work") {
        statusText.textContent = "Status: Busy";
    } 
    else {
        statusText.textContent = "Status: Available for Work";
    }

});

// Follower Count
let followers = 134538;

followButton.addEventListener("click", function () {

    followers = followers + 1;

    followCount.textContent = followers;

});
