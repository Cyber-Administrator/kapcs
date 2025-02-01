document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az űrlap alapértelmezett beküldési viselkedését

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err.message); });
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('responseMessage').innerText = 'Köszönjük, hogy kapcsolatba lépett velünk!';
    })
    .catch(error => {
        console.error('Hiba történt:', error);
        document.getElementById('responseMessage').innerText = `Hiba történt az üzenet küldése során: ${error.message}`;
    });
});