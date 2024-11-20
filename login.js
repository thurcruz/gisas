
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = "index.html";
});

function toggleSenha() {
    const senhaInput = document.getElementById('password');
    const icon = document.getElementById('verSenha');
  
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash'); // Troca o ícone para "ocultar"
    } else {
      senhaInput.type = "password";
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye'); // Troca o ícone para "mostrar"

}
}