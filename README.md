# Datos generales

Intenté hacer algo similar a como se ve la pagina de Reddit en modo oscuro (adjunto captura https://puu.sh/Gpqoq/aebb7923f5.png)

Solucion a los problemas propuestos:

* El 'clickeo' del botón es una acción irreversible. Se desea evitar presiones accidentales. Al clickear se me asigna el color acorde a cuando clikie.
    
    Solucion: el primer click no hace nada, al hacer click se carga el tiempo y se guarda el color que haya quedado (el nombre del usuario se pone del color que haya quedado)

* Simular clicks de otra gente. Osea al abrir la página, se debe ver como el contador desciende de 60 hasta algún número (aleatorio) y luego vuelve a 60. Para alguien que abre la página debe parecer como que hay gente con la página abierta clickeando el botón en momentos diversos.

    Solucion: Cree un temporizador secundario que genera un numero al azar entre 1 y 60, entonces cuando el contador principal es igual que el contador secundario
    se reinicia el principal

* Una vez que el usuario clickó. Mostrarle al menos una estadística o visualización relacionada a cuantos usuarios clickearon cada color

    Solucion: Al tener el color cargado aparece un div oculto con una tabla de estadisticas

* Una base de estilo y simetría. Fuentes, containers, colores, debe parecer una interfaz seria.

    Solucion: se hizo lo que se pudo :(

* Si cierro la página y la reabro que no se olvide si presioné el botón. Utilizar algún tipo de cookie o localStorage para guardar esa sesión.

    *Solucion: usé local storage

# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
