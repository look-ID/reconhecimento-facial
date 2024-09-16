// Função para abrir o modal
function proximo_modal() {
    let modal2 = document.querySelector('.modal_fundo2');
    let modal = document.querySelector('.modal_fundo');
    let janela = document.querySelector('#janela_escura');
    document.querySelector("main").classList.add("blur")
    document.querySelector("body").style.overflow="hidden"

    modal2.style.display='flex'
    modal.style.display='none'
    janela.style.display='flex'
}