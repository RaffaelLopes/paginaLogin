// Seleciona o elemento HTML com a classe "wrapper"
const wrapper = document.querySelector('.wrapper');

// Seleciona o elemento HTML com a classe "login-link"
const loginLink = document.querySelector('.login-link');

// Seleciona o elemento HTML com a classe "register-link"
const registerLink = document.querySelector('.register-link');

// Seleciona o elemento HTML com a classe "btnLogin-popup"
const btnPopup = document.querySelector('.btnLogin-popup');

// Seleciona o elemento HTML com a classe "icon-close"
const iconClose = document.querySelector('.icon-close');

// Adiciona um ouvinte de eventos de clique ao elemento com a classe "register-link"
// Quando esse elemento é clicado, a classe "active" é adicionada ao elemento com a classe "wrapper"
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

// Adiciona um ouvinte de eventos de clique ao elemento com a classe "login-link"
// Quando esse elemento é clicado, a classe "active" é removida do elemento com a classe "wrapper"
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Adiciona um ouvinte de eventos de clique ao elemento com a classe "btnLogin-popup"
// Quando esse elemento é clicado, a classe "active-popup" é adicionada ao elemento com a classe "wrapper"
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

// Adiciona um ouvinte de eventos de clique ao elemento com a classe "icon-close"
// Quando esse elemento é clicado, a classe "active-popup" é removida do elemento com a classe "wrapper"
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/*Este código JavaScript manipula a interatividade de uma janela pop-up de login e registro. Quando o usuário
 clica no link de registro, a classe "active" é adicionada ao elemento com a classe "wrapper", tornando a 
janela pop-up visível. Por outro lado, quando o usuário clica no link de login, a classe "active" é removida, 
ocultando a janela pop-up. O botão de login também ativa a janela pop-up ao adicionar a classe "active-popup" 
ao elemento "wrapper". O ícone de fechamento da janela pop-up remove a classe "active-popup", fechando a janela.*/