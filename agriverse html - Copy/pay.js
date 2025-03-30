document.getElementById("pay-btn").addEventListener("click", function () {
    var options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: 500 * 100, // Amount in paise (₹500)
        currency: "INR",
        name: "Local Farmer Market",
        description: "Fresh Produce Purchase",
        handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
            name: "John Doe",
            email: "john@example.com",
            contact: "9999999999",
        },
        theme: {
            color: "#28a745",
        },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
});
