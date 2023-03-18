const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    });
});

function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid){
        input.classList.remove("form__input--invalid");
        input.parentElement.querySelector(".form__message--invalid").innerHTML = "";
    } else {
        input.classList.add("form__input--invalid");
        input.parentElement.querySelector(".form__message--invalid").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El nombre no puede estar vacío.",
    },
    correo: {
        valueMissing: "El correo no puede estar vacío.",
        typeMismatch: "El correo ingresado no es válido.",
    },
    asunto: {
        valueMissing: "El asunto no puede estar vacío.",
        patternMismatch: "El asunto debe contener entre 10 y 20 caracteres."
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje;
}