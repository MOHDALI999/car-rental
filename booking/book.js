document.getElementById("carBookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const carType = document.getElementById("carType").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Basic validation
    if (!carType || !pickupDate || !returnDate || !name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    if (new Date(returnDate) <= new Date(pickupDate)) {
        alert("Return date must be after the pick-up date.");
        return;
    }

    // Simulate successful booking
    alert(`Thank you, ${name}! Your ${carType} has been booked from ${pickupDate} to ${returnDate}.`);
});
