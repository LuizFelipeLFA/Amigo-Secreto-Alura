let nomesEscolhidos = []

function adicionarAmigo() {
    let nomesInput = document.getElementById('amigo');
    let nomeFormatado = nomesInput.value.trim();

    if (nomeFormatado === "") {
        alert("Por favor, insira um nome.");
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


function atualizarLista() {
    let listaShow = document.getElementById('listaAmigos');
    listaShow.innerHTML = "";

    for (let i = 0; i < nomesEscolhidos.length; i++) {
        let li = document.createElement("li");
        li.textContent = nomesEscolhidos[i];
        listaShow.appendChild(li);
    }

}

function sortearAmigo() {

};
