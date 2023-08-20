// Conectando a Biblioteca
AOS.init();

let show = true;
const menuContent = document.querySelector('.header-content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
})

//Linkando a div da "Caneca" com os stories referente as Canecas no Instagram da loja
var caneca = document.getElementById('caneca-link');
var linkCaneca = "https://www.instagram.com/stories/highlights/17982895378567429/";

caneca.addEventListener("click", function(){
    window.open(linkCaneca, '_blank')
    
})

//-------------------------------------

var azulejo = document.getElementById('azulejo-link');
var linkAzulejo = "https://www.instagram.com/stories/highlights/17941033769469845/";

azulejo.addEventListener("click", function() {
    window.open(linkAzulejo, '_blank')

})

//-------------------------------------

var cartoes = document.getElementById('cartoes-link');
var linkCartoes = "https://www.instagram.com/stories/highlights/18024834619457042/";

cartoes.addEventListener("click", function() {
    window.open(linkCartoes, '_blank')

})


//Linkando o SOBRE NÓS até a Seção Sobre Nós

var linkAbout = document.getElementById('linkAbout');
linkAbout.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoSobre = document.getElementById('about-link');
    secaoSobre.scrollIntoView({ behavior: 'smooth'})
})

//Linkando o HOME até a Seção Home

var linkHome = document.getElementById('linkHome');
linkHome.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoHome = document.getElementById('home-link');
    secaoHome.scrollIntoView( { behavior: 'smooth'})
})

var logoDiv = document.querySelector('.logo');
    logoDiv.addEventListener("click", function() {
    var secaoHome2 = document.getElementById('home-link');
        secaoHome2.scrollIntoView( { behavior: 'smooth'})
})




//Linkando o SERVIÇOS até a Seção Serviços

var linkServicos = document.getElementById('linkServicos');
linkServicos.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoServicos = document.getElementById('servicos-link');
    secaoServicos.scrollIntoView({ behavior: 'smooth'});

})

//Linkando o LOCALIZAÇÃO até a Seção de Localização
var linkLocalizacao = document.getElementById('linkLocalizacao');
linkLocalizacao.addEventListener("click", function(event) {
    event.preventDefault();

    var secaoLocalizacao = document.getElementById('englobar');
    secaoLocalizacao.scrollIntoView({ behavior: 'smooth'});
})


