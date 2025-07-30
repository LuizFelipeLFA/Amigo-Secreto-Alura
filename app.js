//Declarando Variaveis
let nomesEscolhidos = []
let nomesInput = document.getElementById('amigo');

//Atalho para adicionar nomes usando o "Enter"
nomesInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
})

//Funcao para adicionar amigos
function adicionarAmigo() {
    let nomeFormatado = nomesInput.value.trim();

    if (nomeFormatado === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (nomesEscolhidos.includes(nomeFormatado)){
        alert("Esse nome já foi adicionado!");
    } else {
            nomesEscolhidos.push(nomeFormatado);
                atualizarLista()
                nomesInput.value = "";
                console.log(nomesEscolhidos);
            }
    };

//Funcao atualizar lista de amigos adicionados
function atualizarLista() {
    let listaShow = document.getElementById('listaAmigos');
    listaShow.innerHTML = "";

    for (let i = 0; i < nomesEscolhidos.length; i++) {
        let li = document.createElement("li");
        li.textContent = nomesEscolhidos[i];
        listaShow.appendChild(li);
    }

}

//Funcao sortear amigos
function sortearAmigo() {
    if (nomesEscolhidos.length === 0) {
        alert("Nenhum amigo foi adicionado para o sorteio!");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * nomesEscolhidos.length);
    let nomeSorteado = nomesEscolhidos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong><u>${nomeSorteado}</u></strong>`;


};
