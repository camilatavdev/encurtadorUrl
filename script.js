const botaoEncurtador = document.getElementById('encurtar-botao');
const recarregar = document.getElementById('recarregar-botao');

botaoEncurtador.addEventListener('click', shortenUrl);

function shortenUrl() {
    var UrlOriginal = document.getElementById("UrlOriginal").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(UrlOriginal);
    urlEncurtada = document.getElementById("urlEncurtada");

    fetch(apiUrl).then(response => response.text()).then(data => {
        urlEncurtada.value = data;
    }).catch(error => {
        urlEncurtada.value = "Error : Unable to shorten URL!";
    });

}

recarregar.addEventListener('click', () => {
    location.reload();
});