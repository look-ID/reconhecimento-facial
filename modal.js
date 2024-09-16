function abrir_modal() {
    let modal = document.querySelector(".modal");
    let janela_escura = document.querySelector(".janela_escura");
    let imagem = document.querySelector(".imagem");

    modal.classList.add("mostrar");
    janela_escura.classList.add("mostrar");
    imagem.classList.add("mostrar");
}

function fechar_modal() {
    let modal = document.querySelector(".modal");
    let janela_escura = document.querySelector(".janela_escura");
    let imagem = document.querySelector(".imagem");

    modal.classList.remove("mostrar");
    janela_escura.classList.remove("mostrar");
    imagem.classList.remove("mostrar");
}