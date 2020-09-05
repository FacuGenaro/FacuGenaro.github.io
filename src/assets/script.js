document.addEventListener("DOMContentLoaded", function () {

    let tiempoMax = 61;
    let tiempoReset = Math.floor(Math.random() * 61); //variable que es el tiempo donde "otros jugadores" tocaron el boton
    let timer = document.getElementById("reloj");
    let user = document.getElementById("user");
    let tabla = document.getElementById("t1");
    let button = document.getElementById("button");
    let participo = localStorage.getItem("participo");
    
    //descomentando esto permite jugar otra vez
    //localStorage.setItem("participo", 0);
    
    //Creo el intervalo de tiempo para que el contador vaya bajando
    let intervalo = setInterval(timeFunction, 1000);

    //con este if verifico si el usuario ya jugó alguna vez, de ser así le asigno el color que obtuvo y evito que use el botón
    if (participo == 1) {
        showTable();
        user.style.color = localStorage.getItem("color");
        button.style.backgroundColor = 'white';
        clearInterval(intervalo);
        button.disabled = true;
    }


    button.addEventListener('click', function () {
       if (tiempoMax <= 60 && tiempoMax >= 52) {
           console.log(intervalo);
            clearInterval(intervalo);
            button.disabled = true;
            timer.style.display = 'none';
            user.style.color = 'purple';
            localStorage.setItem("color", "purple"); //guardo el color en local storage para ponerlo en el nombre del usuario
            localStorage.setItem("participo", 1); //guardo su participación para saber que no debo permitirle tocar el boton otra vez
            showTable();
        }
        else if (tiempoMax <= 51 && tiempoMax >= 42) {
            clearInterval(intervalo);
            button.disabled = true;
            timer.style.display = 'none';
            user.style.color = 'blue';
            localStorage.setItem("color", "blue");
            localStorage.setItem("participo", 1);
            showTable();
        }
        else if (tiempoMax <= 41 && tiempoMax >= 32) {
            clearInterval(intervalo);
            button.disabled = true;
            timer.style.display = 'none';
            user.style.color = 'green';
            localStorage.setItem("color", "green");
            localStorage.setItem("participo", 1);
            showTable();
        }
        else if (tiempoMax <= 31 && tiempoMax >= 22) {
            clearInterval(intervalo);
            button.disabled = true;
            timer.style.display = 'none';
            user.style.color = 'yellow';
            localStorage.setItem("color", "yellow");
            localStorage.setItem("participo", 1);
            showTable();
        }
        else if (tiempoMax <= 21 && tiempoMax >= 12) {
            clearInterval(intervalo);
            button.disabled = true;
            timer.style.display = 'none';
            user.style.color = 'orange';
            localStorage.setItem("color", "orange");
            localStorage.setItem("participo", 1);
            showTable();
        }
        else if (tiempoMax <= 11 && tiempoMax >= 0) {
            clearInterval(intervalo);
            button.disabled = true;
            timer.style.display = 'none';
            user.style.color = 'red';
            localStorage.setItem("color", "red");
            localStorage.setItem("participo", 1);
            showTable();
        }
    })

    function showTable(){
        setTimeout(function(){
            tabla.style.display = 'block';
        },100);
    }

    function timeFunction() {
        tiempoMax--;
        setColor(tiempoMax)
        timer.innerHTML = tiempoMax;
        if (tiempoMax == tiempoReset) {
            setTimeout(function () {
                tiempoMax = 61;
                tiempoReset = Math.floor(Math.random() * 61);
            }, 1000);
        }
    }

    function setColor(t) {
        if (t <= 60 && t >= 52) {
            button.style.backgroundColor = 'purple';
        } else if (tiempoMax <= 51 && tiempoMax >= 42) {
            button.style.backgroundColor = 'blue';
        } else if (tiempoMax <= 41 && tiempoMax >= 32) {
            button.style.backgroundColor = 'green';
        } else if (tiempoMax <= 31 && tiempoMax >= 22) {
            button.style.backgroundColor = 'yellow';
        } else if (tiempoMax <= 21 && tiempoMax >= 12) {
            button.style.backgroundColor = 'orange';
        } else if (tiempoMax <= 11 && tiempoMax >= 0) {
            button.style.backgroundColor = 'red';
        }
    }
});