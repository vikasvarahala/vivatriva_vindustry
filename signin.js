// Replace 'https://your-backend-app.herokuapp.com' with your actual Heroku app URL
const backendUrl = 'https://vikasvarahala.github.io/vivatriva_vindustry/';

document.getElementById('signinButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${backendUrl}/signin`, { // Use the live URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
        alert('Sign in successful! Please check your email for confirmation.');
        window.location.href = 'index.html'; // Or your login page name
    } else {
        alert('Error signing in. The username or email may already be taken.');
    }
});
