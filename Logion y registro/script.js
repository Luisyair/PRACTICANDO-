// movimiento para ocuktar y mostrar el inicio y el registtro 

// de esta manera llamamos al elemento con el id btnInicio , la  referencia de este elemento es btnInicio

// const btn = document.getElementById("btn");

// de esta manera se llama la clase, recordar que siempre las clases iniciam con un punto
const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");



// creamos el evento click para el boton btnInicio
  

btnSignIn.addEventListener("click",()=>{
    // con esta linea de codigo le decimos que al hacer click en el boton btnInicio se agregue la clase active a container
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click",()=>{
    // con esta linea de codigo le decimos que al hacer click en el boton btnInicio se agregue la clase active a container
    container.classList.add("toggle");
});

