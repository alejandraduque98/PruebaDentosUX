# Prueba tecnica dentos desarrollador UX/UI

![Mockup](../PruebaDentosUX/Documentacion/web%20mockup.jpg)
 
***
## Prueba diseño
En nuestro próximo sprint tenemos planeado implementar un nuevo módulo
de agenda, el cual se puede ver para dos tipos de perfiles: recepcionistas y
doctores; por lo tanto, es necesario diseñar los prototipos de alta fidelidad a
desarrollar para dispositivos mobile y desktop.
Permisos de acuerdo al cargo del usuario.
### Recepcionista
1. Ver la agenda con pacientes citados
2. Buscar por doctor, fecha, hora y pacientes
3. Al abrir la cita se debe tener una opción para ver el perfil del paciente
4. Ver lista de disponibilidad de doctores

![Mockup](../PruebaDentosUX/Documentacion/Dise%C3%B1o%20Recepcionista.PNG)

### Doctores
1. Ver la agenda con solo sus citas
2. Al abrir la cita se debe tener una opción para ver el perfil del paciente
3. Buscar por fecha, hora y pacientes
4. Agregar cita nueva
5. Reprogramar cita
6. Al agregar y/o reprogramar una cita debe mostrar un mensaje que
permita saber si el registro fue guardado o no satisfactoriamente

El perfil de paciente debe tener los siguientes datos:
Foto, Documento, Nombres, Apellidos, Fecha de nacimiento, País, Ciudad,
Dirección, Teléfono y EPS.

***
## Prueba HTML, CSS y JS
Crear la página del perfil del paciente con los datos anteriormente
mencionados, adicional agregarle un botón para agendarle citas.
El botón debe tener las siguientes validaciones con JS:
![Mockup](../PruebaDentosUX/Documentacion/perfil.png)
1. Si el paciente es menor a 18 años, al dar clic en el botón debe aparecer
un mensaje que diga: “Ups! Para solicitar cita debe ser solicitada por su
acudiente”
![Mockup](../PruebaDentosUX/Documentacion/Modalmenoredad.PNG)
2. Si el paciente es mayor o igual a 18 años, debe aparecer un mensaje
que diga: “Paciente apto para citas.”
![Mockup](../PruebaDentosUX/Documentacion/Modalmayordad.PNG)

***

## Tecnologias usadas

| Tecnologia      |    | 
|-------------------|-------------|
| ![Mockup](../PruebaDentosUX/Documentacion/js.png)   | JavaScript   | 
|![Mockup](../PruebaDentosUX/Documentacion/css.png)        | CSS       | 
|![Mockup](../PruebaDentosUX/Documentacion/html.png)  | HTML | 
| ![Mockup](../PruebaDentosUX/Documentacion/figma.png)         | Figma  | 
 


