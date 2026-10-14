let dadosPesquisa;

async function buscaUtilizadores (){
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const resultado = await resposta.json();
        dadosPesquisa = resultado;
        const html = resultado.map(utilizador => `<li><p>Nome: ${utilizador.name}</p><p>Email: ${utilizador.email}</p><p>Cidade: ${utilizador.address.city}</p></li>`).join("");
        document.querySelector("#lista").innerHTML = html;    
    } catch (error) {
        console.error(error);
    }
}

buscaUtilizadores();

const inputPesquisa = document.querySelector('#pesquisa');

inputPesquisa.addEventListener('input', () =>{
    //console.log(inputPesquisa.value);
    //console.log(dadosPesquisa);
    const pesquisa = dadosPesquisa.filter(utilizador => utilizador.name.toLowerCase().includes(inputPesquisa.value.toLowerCase()));
    console.log(pesquisa);
    const htmlPesquisa = pesquisa.map(utilizador => `<li><p>Nome: ${utilizador.name}</p><p>Email: ${utilizador.email}</p><p>Cidade: ${utilizador.address.city}</p></li>`).join("");
    document.querySelector("#lista").innerHTML = htmlPesquisa;    
})
