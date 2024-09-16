// Função para abrir o modal
function abrir_modal() {
    let modal = document.querySelector('.modal_fundo');
    let janela = document.querySelector('#janela_escura');
    document.querySelector("main").classList.add("blur")
    document.querySelector("body").style.overflow="hidden"

    modal.style.display='flex'
    janela.style.display='flex'
}

// Função para fechar o modal
function fechar_modal() {
    let modal = document.querySelector('.modal_fundo');
    let modal2 = document.querySelector('.modal_fundo2');
    let janela = document.querySelector('#janela_escura')
    document.querySelector("main").classList.remove("blur")
    document.querySelector("body").style.overflowY="auto"
    
    modal.style.display='none'
    modal2.style.display='none'
    janela.style.display='none'
}

window.onload = function() {
    setTimeout(function() {
        var modal = document.querySelector('.modal_fundo');
        modal.classList.add('mostrar');
    }, 1500); // 1 segundo de atraso
};


abrir_modal()
