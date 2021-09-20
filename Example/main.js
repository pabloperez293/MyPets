let btnManu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu");
let activador = true;
// Menu desplegable
btnManu.addEventListener("click", () => {

    document.querySelector(".btn-menu i").classList.toggle("fa-times");

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;

    }else{
        activador = false;
        
        menu.style.left = "-100%";
        menu.style.transition = "0.5";

    activador = true;
    
    }    
});
// Menu desplegable

// Clase activada
let enlaces = document.querySelectorAll(".lists li a");

enlaces.forEach( (element ) => {
    element.addEventListener("click" , (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove("activo");

        });
        event.target.classList.add("activo");
    });
});
// Clase activada

// SCroll Efects

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector(".arriba");

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    // menu muestra o no muestra
    if (prevScrollPos > currenScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;
    
    //scroll estilos
    let arriba  = window.pageYOffset;

    if (arriba <= 600){
        containerMenu.style.borderBottom = "none";

        goTop.style.right = "-100%";
        
    }else{
        containerMenu.style.borderBottom = "4px solid #4F98CA";

        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
    }
}
goTop.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector("#abajo");

verAbajo.addEventListener("click", () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
})