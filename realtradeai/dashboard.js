document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        const userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = `
            <p>Welcome, ${userData.name} (${userData.username})!</p>
            <p>User ID: ${userData.id}</p>
        `;
    } else {
        // Redirect to the login page if user information is not found
        window.location.href = 'index.html';
    }
});