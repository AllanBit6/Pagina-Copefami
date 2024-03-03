let cotizador = document.getElementById('cotizador');


//Calcular los valores
function calcular(e){
    
    e.preventDefault();
    
    let monto = document.getElementById('monto').value;
    let tiempo = document.getElementById('tiempo').value;
    var tasaInt = 0;
    var intereses = 0;
    var montoPInteres = 0;
    var totalISR = 0;
    
    
/***********************TASAS DE INTERES*******************************/   
    
    /*1000 a 25000  */
    if (monto <= 25000 && tiempo == 3){
        tasaInt = 7;   
    }
     
    if (monto <= 25000 && tiempo == 6){     
        tasaInt = 7;
    }
    
    if (monto <= 25000 && tiempo == 12){ 
        tasaInt = 7;
    }
        
        
    /*25001 a 50000  */
    if (monto > 25000 && monto <= 50000 && tiempo == 3){
        tasaInt = 8;   
    }
     
    if (monto > 25000 && monto <= 50000 && tiempo == 6){     
        tasaInt = 8;
    }
    
    if (monto > 25000 && monto <= 50000 && tiempo == 12){ 
        tasaInt = 10;
    } 
    
    
    /*50001 a 75000  */
    if (monto > 50000 && monto <= 75000 && tiempo == 3){
        tasaInt = 10;   
    }
     
    if (monto > 50000 && monto <= 75000 && tiempo == 6){     
        tasaInt = 10;
    }
    
    if (monto > 50000 && monto <= 75000 && tiempo == 12){ 
        tasaInt = 12;
    }   
        
    /*75001 a 100000  */
    if(monto > 75000 && monto <= 100000 && tiempo == 3){
        tasaInt = 11;   
    }
     
    if (monto > 75000 && monto <= 100000 && tiempo == 6){     
        tasaInt = 11;
    }
    
    if (monto > 75000 && monto <= 100000 && tiempo == 12){ 
        tasaInt = 12.5;
    }
    
    /*100000 en adelante  */
    if (monto > 100000 && tiempo == 3){
        tasaInt = 12;   
    }
     
    if (monto > 100000 && tiempo == 6){     
        tasaInt = 12;
    }
    
    if (monto > 100000 && tiempo == 12){ 
        tasaInt = 13;
    }
    
    
        
/******************************************************/   
    
    intereses = monto * tasaInt / 100 / 365 * (tiempo * 30);
    
    totalISR = (intereses * 10) / 100;
    
    montoPInteres = (monto * 1) + (intereses - totalISR) ;
    
   
    
    
    UI(monto, tiempo, intereses, tasaInt, montoPInteres, totalISR);
    
    

}


function UI(monto, tiempo, intereses, tasaInt, montoPInteres, totalISR){
    
    tasaInt = (tasaInt * 1).toFixed(2);
    intereses = (intereses * 1).toFixed(2);
    montoPInteres = (montoPInteres * 1).toFixed(2);
    totalISR = (totalISR * 1).toFixed(2);
    
    
    var textMonto = "Q" + monto;
    var textTiempo = tiempo + " Meses";
    var textInteres = "Q" + intereses;
    var textTasa = tasaInt + "%";
    var textMontoPInteres = "Q" + montoPInteres;
    var textTotalISR = "Q" + totalISR;
    
    
    document.getElementById('capital').innerHTML = textMonto;
    document.getElementById('plazo').innerHTML = textTiempo;
    document.getElementById('interes').innerHTML = textInteres;
    document.getElementById('percent').innerHTML = textTasa;
    document.getElementById('capitalPint').innerHTML = textMontoPInteres;
    document.getElementById('totISR').innerHTML = textTotalISR;
    
    
}

cotizador.addEventListener('submit', calcular);