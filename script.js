const form = document.getElementById("cadastroForm");
const usuariosList = document.getElementById("usuariosList");

form.addEventListener("submit", function(Event){
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    const li = document.createElement("li");
    li.textContent = `${nome} - ${email} - ${idade} anos`;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.style.marginLeft = "1rem";

    botaoRemover.addEventListener("click",() => {
        usuariosList.removeChild(li);
    });

    li.appendChild(botaoRemover);

    usuariosList.appendChild(li);
    form.reset()
});