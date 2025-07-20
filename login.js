
const backendUrl = 'https://vikasvarahala.github.io/vivatriva_vindustry/';

document.getElementById('loginButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${backendUrl}/login`, { // Use the live URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        window.location.href = 'quiz.html';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // This is a FAKE login for GitHub Pages.
    // It just checks if the user typed anything.
    if (username && password) {
        alert('Login successful!');
        // Redirect to the quiz page. Create a quiz.html file for this to work.
        window.location.href = 'interface.html';
    } else {
        alert('Please enter a username and password.');
    }
});

