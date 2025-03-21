document.getElementById("zodiacForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form refresh
    let birthdate = document.getElementById("birthdate").value;

    if (birthdate) {
        document.getElementById("resultsContainer").classList.remove("display-none");
    }
});