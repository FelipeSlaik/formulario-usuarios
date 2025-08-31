const form = document.getElementById("cadastroForm");
const usuariosList = document.getElementById("usuariosList");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function salvarUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;

  let valido = true;

  document.getElementById("erroNome").textContent = "";
  document.getElementById("erroEmail").textContent = "";
  document.getElementById("erroIdade").textContent = "";

  if (nome.trim() === "") {
    document.getElementById("erroNome").textContent = "Digite o nome!";
    valido = false;
  }

  if (email.trim() === "") {
    document.getElementById("erroEmail").textContent = "Digite o email!";
    valido = false;
  } else if (!email.includes("@")) {
    document.getElementById("erroEmail").textContent = "Email inválido!";
    valido = false;
  }

  const idadeNum = Number(idade);

  if (idade.trim() === "" || idadeNum <= 0 || idadeNum > 120) {
    document.getElementById("erroIdade").textContent =
      "Idade inválida!";
    valido = false;
  }

  if (!valido) return;

  const li = document.createElement("li");
  li.textContent = `${nome} - ${email} - ${idade} anos`;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.style.marginLeft = "1rem";

  botaoRemover.addEventListener("click", () => {
    usuariosList.removeChild(li);
    usuarios = usuarios.filter((u) => u !== usuario);
    salvarUsuarios();
  });

  li.appendChild(botaoRemover);

  const usuario = { nome, email, idade };
  usuarios.push(usuario);

  salvarUsuarios();

  usuariosList.appendChild(li);
  form.reset();
});

usuarios.forEach((usuario) => {
  const li = document.createElement("li");
  li.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.idade} anos`;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.style.marginLeft = "1rem";

  botaoRemover.addEventListener("click", () => {
    usuariosList.removeChild(li);
    usuarios = usuarios.filter((u) => u !== usuario);
    salvarUsuarios();
  });

  li.appendChild(botaoRemover);
  usuariosList.appendChild(li);
});
