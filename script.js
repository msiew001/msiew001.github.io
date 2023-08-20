document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');

    let counter = 0;

    // Load counter value from the text file
    fetch('counter.txt')
        .then(response => response.text())
        .then(data => {
            counter = parseInt(data);
            counterElement.textContent = counter;
        })
        .catch(error => console.error('Error loading counter:', error));

    incrementButton.addEventListener('click', function() {
        counter++;
        counterElement.textContent = counter;

        // Update the text file with the new counter value
        fetch('counter.txt', {
            method: 'PUT',
            body: counter.toString()
        })
        .catch(error => console.error('Error updating counter:', error));
    });
});
