function downloadApp() {
    alert("Downloading ReShade... Coming soon!");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission
    let form = this;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    }).then(() => {
        document.getElementById("success-message").style.display = "block";
        form.reset(); // Clear the form
    }).catch(error => console.error("Error:", error));
});

function downloadApp() {
    // Scroll to the download section
    document.getElementById("download").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission
    let form = this;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    }).then(() => {
        document.getElementById("success-message").style.display = "block";
        form.reset(); // Clear the form
    }).catch(error => console.error("Error:", error));
});
 
