async function buscaUtilizadores (){
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const resultado = await resposta.json();
        const html = resultado.map(utilizador => `<p>${utilizador.name}</p>`).join("");
        document.querySelector("#lista").innerHTML = html;    
    } catch (error) {
        console.error(error);
    }
}

buscaUtilizadores();


