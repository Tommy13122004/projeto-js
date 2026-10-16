let dadosPesquisa;

function mostraUtilizadores(lista){
    const html = lista.map(utilizador => `<li><p>Nome: ${utilizador.name}</p><p>Email: ${utilizador.email}</p><p>Cidade: ${utilizador.address.city}</p></li>`).join("");
    document.querySelector("#lista").innerHTML = html;    
}

async function buscaUtilizadores (){
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const resultado = await resposta.json();
        dadosPesquisa = resultado;
        mostraUtilizadores(resultado); 
    } catch (error) {
        console.error(error);
    }
}

buscaUtilizadores();

const inputPesquisa = document.querySelector('#pesquisa');

inputPesquisa.addEventListener('input', () =>{
    const pesquisa = dadosPesquisa.filter(utilizador => utilizador.name.toLowerCase().includes(inputPesquisa.value.toLowerCase()));
    mostraUtilizadores(pesquisa);
})
