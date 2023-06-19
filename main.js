let slider = document.querySelector(".slider-contenedor2")/*para los 4 elementos en general */
let sliderIndividual = document.querySelectorAll(".contenido-slider")/*aqui es para elemento por elemento*/
let contador = 1;
let width = sliderIndividual[0].clientWidth; /*al primer elemento de cada contenido slider va a tomar su ancho(width)*/
let intervalo = 4000;
const clickQuestions = document.querySelectorAll('.articulo-pregunta');


window.addEventListener("resize", function(){

    width = sliderIndividual[0].clientWidth;

})


setInterval(function(){

    slides();

}, intervalo);

function slides(){

    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .7s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){

            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .0s";
            contador=1;

        },1500)

    }

}


clickQuestions.forEach(clickQuestion =>{
    clickQuestion.addEventListener('click', ()=>{
        
        const arrow = clickQuestion.children[0];
        arrow.classList.toggle('articulo-flecha--rotate');

        const answerContainer = clickQuestion.nextElementSibling;
        answerContainer.classList.toggle('articulo-contenido--show');
    })
})



