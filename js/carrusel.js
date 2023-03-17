const punto = document.querySelectorAll('.punto');
const carrusel = document.querySelector('.proyectos__carrusel');

punto.forEach(( cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -50;

        carrusel.style.transform = `translateX(${operacion}%)`;
    })
})