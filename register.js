const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbz8dRobVhaEaOkxCgiavMjgEwaVDST3FdR80Z5GIjBNqV0nBmhJIvnhlxMBEeO9iGR0/exec";

    const formData = new FormData(form);

    fetch(scriptURL, {
        method: "POST",
        body: formData,
    })
        .then(() => {
            alert("✅ Registered Successfully!");
            form.reset();
        })
        .catch(() => {
            alert("❌ Something went wrong. Please try again.");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "🎯 Secure My Free Seat";
        });
});
