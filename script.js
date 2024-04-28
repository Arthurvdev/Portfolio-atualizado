function scroll(element){
    document.querySelector(element).scrollIntoView({ behavior: "smooth"});
}

document.querySelector('#habilidades').addEventListener("click", function(event){
    event.preventDefault();

    scroll("#habilidades-hr");

    console.log('rolar para baixo')
})