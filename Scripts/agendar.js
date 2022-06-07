'use strict'

// esperar que cargue la pagina completamente
window.onload = () => {

    // agregar funcion al boton
    document.getElementById("schedule").addEventListener("click", agendarCita);

}

// funcion validar Agendar cita
var agendarCita = () => {    
    try{
        // obtener fecha de nacimiento
        var stringDate = document.getElementById("date_birth").textContent;

        // parsear fecha de nacimiento
        const date_birth = Date.parse(stringDate);

        // calcular edad actual
        var years = Math.floor((Date.now() - date_birth)/(1000*60*60*24*365));

        //traer modal    
        var  msgConfirm = document.getElementById("msgConfirm");

        // validar si es mayor de edad
        if(years >= 18){
            msgConfirm.innerHTML = "Paciente apto para citas";
            
        }else{  
            msgConfirm.innerHTML = "Ups! Para solicitar cita debe ser solicitada por su acudiente"          
        }
    }
    catch (error) {
        console.error("formato de fecha malformado");
    }
}