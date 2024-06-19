document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica de inicio de sesión aquí
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Aquí podrías enviar datos a un servidor para autenticación
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica de registro aquí
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    var email = document.getElementById('email').value;
    // Aquí podrías enviar datos a un servidor para guardar la nueva cuenta
});

function loadUsers() {
    // Implementar lógica para cargar usuarios aquí
}

window.onload = loadUsers;
