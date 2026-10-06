async function buscaUtilizadores (){
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const resultado = await resposta.json();
        console.log(resultado);    
    } catch (error) {
        console.error(error);
    }
    
}

buscaUtilizadores();
