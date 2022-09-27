const $randomNumber = document.getElementById('random-number');
const $creationDate = document.getElementById('creation-date');

function updateRandomNumber() {
    fetch('/api/Random')
        .then((response) => response.json())
        .then((data) => {
            $randomNumber.innerHTML = data.random;
            $creationDate.innerHTML = data.created;
        });
}

// Call the function manually at the very beginning, because
// setInterval will call it after 5000ms for the first time
updateRandomNumber();

// Calls the updateRandomNumber function every 5000 ms
setInterval(updateRandomNumber, 5000);
