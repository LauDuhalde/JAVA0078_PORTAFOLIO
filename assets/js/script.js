$(document).ready(function () {
    // VALIDACIÓN FORMULARIO DE CONTACTO
    $('#formContacto').submit(function (e) {
        e.preventDefault(); // Evita el envío real

        const correo = $('#email').val().trim();

        // Expresión regular para validar email simple
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validación de email
        if (!emailValido.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            return;
        }

        // Se muestra mensaje de contacto exitoso
        $('#mensajeExito').removeClass('d-none');

        // Limpia formulario
        this.reset();
    });
});