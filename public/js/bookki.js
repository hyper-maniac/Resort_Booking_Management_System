function calculateTotal() {
    var rooms = parseInt(document.getElementById('rooms').value);
    var roomCost = 10000;
    var totalAmount = rooms * roomCost;
    document.getElementById('totalAmount').innerText= totalAmount;
}

function updateTotalAmount() {
    calculateTotal();
    return true;
}
calculateTotal();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            checkIn: document.getElementById('check-in').value,
            checkOut: document.getElementById('check-out').value,
            rooms: document.getElementById('rooms').value,
            guests: document.getElementById('guests').value,
            totalAmount:document.getElementById('totalAmount').innerText
        };

        localStorage.setItem('bookingData', JSON.stringify(formData));
        window.location.href = 'confirmation.html'; 
    });
});