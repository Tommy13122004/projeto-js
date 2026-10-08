async function buscaUtilizadores (){
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const resultado = await resposta.json();
        const html = resultado.map(utilizador => `<li><p>Nome: ${utilizador.name}</p><p>Email: ${utilizador.email}</p><p>Cidade: ${utilizador.address.city}</p></li>`).join("");
        document.querySelector("#lista").innerHTML = html;    
    } catch (error) {
        console.error(error);
    }
}

buscaUtilizadores();

