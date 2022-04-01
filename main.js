import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";



const botaoEncontrarFilme = document.querySelector('.botao');
const containerFilme = document.querySelector('.filmeContainer')

let idFilme = 0;


botaoEncontrarFilme.addEventListener("click", () => {
    
    idFilme = Math.floor(Math.random() * 1999);
    containerFilme.classList.add('active')

    axios.get(`${BASE_URL}${idFilme}?${API_KEY}&${language}`)
    .then(response => {
    const data = response.data
    const capa = IMG_URL + data.poster_path;

    if (capa == "") {
        capaFilme.src = "./assets/unavailable.jpg"
    } else {
        capaFilme.src = capa
    }

    tituloFilme.textContent = data.title;

    if (data.overview == "") {
        descricaoFilme.textContent = "Sinopse indisponível."
    } else{ 
        descricaoFilme.textContent = data.overview;
    }

    })
    .catch(error => console.error(error))

})






