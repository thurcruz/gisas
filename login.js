function toggleSenha() {
  const password = document.querySelector('#senha');
  password.type = password.type === 'password' ? 'text' : 'password';
}

function login(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const senha = document.querySelector('#senha').value;

  // Ler os dados do LocalStorage (usando o nome correto 'listaUser')
  const listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

  console.log("Dados no LocalStorage:", listaUser); // Verifique se os dados estão sendo armazenados corretamente

  // Verificar se o usuário existe
  const userFound = listaUser.find(user => user.email === email && user.senha === senha);

  if (userFound) {
    alert("Login realizado com sucesso!");
    location.href = "index.html"; // Redirecionar para a página principal
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// Adicionar o evento de submit ao formulário
const form = document.querySelector(".login-form");
if (form) {
  form.addEventListener("submit", login);
} else {
  console.error("Formulário não encontrado! Verifique se a classe 'login-form' existe no HTML.");
}

