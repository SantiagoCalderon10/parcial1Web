
document.addEventListener('DOMContentLoaded', () => {

    const btninicio = document.querySelector('.btn-ingreso');
    const btnCancelar = document.querySelectorAll(".btn-cancel");
    const btnregistro = document.querySelectorAll('.btn-registro');


    btninicio.addEventListener('click', () => {
        event.preventDefault();
        const usuario = document.getElementById('nombre').value;
        const password = document.getElementById('password').value;
        console.log("Usuario " + usuario);
        console.log("Contraseña" + password)
    });
    btnCancelar.addEventListener('click', () => {
        window.location.href = "index.html";
    });

    btnregistro.addEventListener('click', () => {
        window.location.href = "Registro.html";
    });

});
