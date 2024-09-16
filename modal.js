// Função para abrir o modal
function abrir_modal() {
    let modal = document.querySelector('.modal_fundo');
    let janela = document.querySelector('#janela_escura');
    document.body.classList.add('blur')

    modal.style.display='flex'
    janela.style.display='flex'
    

}

// Função para fechar o modal
function fechar_modal() {
    let modal = document.querySelector('.modal_fundo');
    let janela = document.querySelector('#janela_escura')
    document.body.classList.remove('blur')
    
    modal.style.display='none'
    janela.style.display='none'

}
