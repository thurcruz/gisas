function toggleSenha(inputId, iconId) {
  const senhaInput = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    senhaInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Função para validar o formulário
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const nomeMaterno = document.getElementById("nomeMaterno").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const genero = document.getElementById("gender").value;
  const cpf = document.getElementById("cpf").value.trim();
  const dataNascimento = document.getElementById("data-nascimento").value;
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!nome || !nomeMaterno || !telefone || !genero || !cpf || !dataNascimento || !cep || !rua || !cidade || !estado || !email || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  // Verifica se as senhas coincidem
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return false;
  }

  // Salvar no LocalStorage
  salvarLocalStorage({ nome, nomeMaterno, telefone, genero, cpf, dataNascimento, cep, rua, cidade, estado, email, senha });

  alert("Cadastro realizado com sucesso!");
  return true;
}

// Função para salvar os dados no LocalStorage (como lista de usuários)
function salvarLocalStorage(dados) {
  let listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];
  
  // Adiciona o novo usuário à lista
  listaUser.push(dados);
  
  // Salva a lista de usuários no localStorage
  localStorage.setItem("listaUser", JSON.stringify(listaUser));

  // Debug: Verificando os dados salvos no localStorage
  console.log("Lista de usuários após cadastro:", listaUser);
}

// Adiciona o evento de submissão ao formulário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  if (validarFormulario()) { 
    window.location.href = "login.html"; // Redireciona para a página de login
    document.querySelector("form").reset(); // Limpa o formulário após o envio
  }
});
