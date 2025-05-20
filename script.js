document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("actionButton");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        message.textContent = "Bravo ! Vous avez cliqué sur le bouton 🎉";
    });
});
