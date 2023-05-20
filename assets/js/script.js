function exibirMensagemAceite(event) {
    event.preventDefault();

    var mensagemAceite = document.getElementById("mensagemaceite");
    mensagemAceite.style.display = "block";

    setTimeout(function() {
        mensagemAceite.style.display = "none";
    }, 4000);
}