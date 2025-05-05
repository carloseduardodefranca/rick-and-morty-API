
const divCards = document.querySelector(".cards")
const btn = document.querySelector("#btn")
let pagina = 1
function carregarMais(){
    if(pagina == 42){
        btn.setAttribute("hidden")
    }
pagina ++
aprensentarPersonagen()
}

btn.addEventListener("click", carregarMais)

async function aprensentarPersonagen(){
const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
const data = await response.json()

data.results.forEach((personagem)=>{
    const divecard = document.createElement("div")

    divecard.classList.add("card")

    divecard.innerHTML = `<header>
    <img src="${personagem.image}" alt="">
    <p>${personagem.name}</p>
</header>
<div class="content">
    <div class="status"><img src="assets/img/status.svg">${personagem.status}</div>
    <div class="status"><img src="assets/img/status2.svg">${personagem.species}</div>
    <div class="status"><img src="assets/img/status3.svg">${personagem.origin.name}</div>
`
divCards.appendChild(divecard)
})




}

aprensentarPersonagen()