function adicionarFilme() {
    var filmeFav = document.getElementById("filme").value;
    var name = document.getElementById("name").value;
    var trailer = document.getElementById("trailer").value;
    var descricao = document.getElementById("descricao").value;


    if (filmeFav.endsWith(".jpg")) {
        listarFilmes(filmeFav);

    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
    var elementoFilmeFav = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFav;
}