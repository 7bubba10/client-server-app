function navigateToHome(){
    window.location.href = '/Client/Views/home.html';
}

function navigateToRegistration(){
    window.location.href = '/Client/Views/registration.html';
}

function navigateToProfile(){
    window.location.href = '/Client/Views/profile.html';
}

// Check login status 
function setLoginStatus() {
    const logIn = document.getElementById('LogInOut');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    logIn.innerText = isLoggedIn ? "Logout" : "Login";
}

//Updates login/out text
function LogInOut() {
    const logIn = document.getElementById('LogInOut');
    const isLoggedIn = logIn.innerText === "Login";

    if (isLoggedIn) {
        logIn.innerText = "Logout";
        localStorage.setItem('isLoggedIn', 'true');  // Set login status
    } else {
        logIn.innerText = "Login";
        localStorage.setItem('isLoggedIn', 'false'); // Clear login status 
    }
}

// Call setLoginStatus when the page loads
window.onload = setLoginStatus;


//Bring to previous window
function goBack() {
    window.history.back();
}