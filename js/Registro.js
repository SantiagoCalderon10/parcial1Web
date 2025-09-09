document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-registro');

const btnCancelar = document.querySelector('.btnCancelar');
    form.addEventListener('submit', () => {
   

        const regexNombresApellidos = /^[A-Za-z\s]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefono = /^\d{10}$/; 
        const regexEstrato = /^[1-6]$/; 

        const nombres = document.getElementById('nombres').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const estrato = document.getElementById('estrato').value;
        const fechaNacimiento = document.getElementById('fecha').value;
        const grupoSanguineo = document.getElementById('sangre').value;
        const genero = document.querySelector('input[name="genero"]:checked');
        const actividades = Array.from(document.querySelectorAll('input[name="actividades"]:checked')).map(el => el.value);

      
        let isValid = true;
        let errorMessage = '';

        if (!regexNombresApellidos.test(nombres)) {
            isValid = false;
            errorMessage += '• Nombres: Solo se permiten letras y espacios.\n';
        }
        if (!regexNombresApellidos.test(apellidos)) {
            isValid = false;
            errorMessage += '• Apellidos: Solo se permiten letras y espacios.\n';
        }
        if (!regexEmail.test(email)) {
            isValid = false;
            errorMessage += '• Email: Formato de correo electrónico inválido.\n';
        }
        if (!regexTelefono.test(telefono)) {
            isValid = false;
            errorMessage += '• Teléfono: Debe contener 10 dígitos numéricos.\n';
        }
        if (!regexEstrato.test(estrato)) {
            isValid = false;
            errorMessage += '• Estrato: Debe ser un número del 1 al 6.\n';
        }
        if (!fechaNacimiento) {
            isValid = false;
            errorMessage += '• Fecha de Nacimiento: Este campo es obligatorio.\n';
        }
        if (grupoSanguineo === 'Seleccione') {
            isValid = false;
            errorMessage += '• Grupo Sanguíneo: Por favor, seleccione una opción.\n';
        }
        if (!genero) {
            isValid = false;
            errorMessage += '• Género: Este campo es obligatorio.\n';
        }
        if (actividades.length === 0) {
            isValid = false;
            errorMessage += '• Actividades Favoritas: Debe seleccionar al menos una actividad.\n';
        }

        if (!isValid) {
            alert('Por favor, corrija los siguientes errores:\n\n' + errorMessage);
            return;
        }

    
        const mensajeFinal = `
            Registro Exitoso:\n
            Nombres: ${nombres}
            Apellidos: ${apellidos}
            Email: ${email}
            Teléfono: ${telefono}
            Estrato: ${estrato}
            Fecha de Nacimiento: ${fechaNacimiento}
            Grupo Sanguíneo: ${grupoSanguineo}
            Género: ${genero.value}
            Actividades Favoritas: ${actividades.join(', ')}
        `;

        alert(mensajeFinal);
    });

    
    btnCancelar.addEventListener('click', () => {
       
        window.location.href = "Login.html"; 
    });
});