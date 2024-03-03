let btnMenu = document.querySelector ('.btn-menu');
let menu = document.querySelector ('.list-container');
let containerMenu = document.querySelector ('.menu');
let activador =true;


//Animacion menu de Navegacion

btnMenu.addEventListener('click', () => {
    
    document.querySelector('.btn-menu i').classList.toggle ('fa-times');
    
        if(activador){
           
        menu.style.left= "0";
        menu.style.transition= "0.5s";
            
        activador = false;
            
            
        }else{
            
        menu.style.left= "-100%";
        menu.style.transition= "0.5s";
            
        activador = true;
               
        }
    
});

//Intercalar Clase Active

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) => {
    
    element.addEventListener('click', (event) =>{
        
        
        enlaces.forEach( (link) => {
            
            link.classList.remove('active');
            
        });
        
        event.target.classList.add('active');
        
    });
    
});

//Efecto Scroll

let prevScrollPos = window.pageYOffset; 
let goTop = document.querySelector ('.go-top');

window.onscroll = () => {
   
    let CurrentScrollPos = window.pageYOffset;
    //Mostrar y Ocultar Menu
    
    if (prevScrollPos > CurrentScrollPos){
        
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
        
    }else{
        
        containerMenu.style.top = "-75px";
        containerMenu.style.transition = "0.5s";
        
    }
    
    prevScrollPos = CurrentScrollPos;
    
    //Mostrar y Ocultar Scroll Estilos
    
    let arriba = window.pageYOffset; 
    
    if (arriba <= 600){
       
       containerMenu.style.borderBottom = "none";
        
       goTop.style.right = "-100%";
    }else{
        
        containerMenu.style.borderBottom = "4px solid white";
        
        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
        
    }
}


goTop.addEventListener('click',  () => {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    
    
});


let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    
    
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});

