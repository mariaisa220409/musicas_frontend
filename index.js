const urlBackend = "http://localhost:3000"
const listaMusicas = document.getElementById("listaMusicas")

async function buscarMusicas() {
    const resposta = await fetch(urlBackend)
    const musicas = await resposta.json()

    musicas.forEach((musica) => {
        listaMusicas.innerHTML += `
        <article class= "musica">
        <h2>${musica.titulo<}</h2>
        `

    })
}