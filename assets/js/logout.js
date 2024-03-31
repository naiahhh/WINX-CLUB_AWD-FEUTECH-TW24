// logout
if (!localStorage.getItem('username')) {
    document.getElementById('_logout').style.display = 'none';
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = '../index.html';
}

if (!localStorage.getItem('username')) {
    document.getElementById('logout').style.display = 'none';
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = '../index.html';
}

document.getElementById('_logout').addEventListener('click', logout);
document.getElementById('logout').addEventListener('click', logout);


