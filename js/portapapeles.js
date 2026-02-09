// Función para copiar el email al portapapeles
function copyEmailToClipboard() {
    // Definir el email que queremos copiar
    const email = "sergireb2010@hotmail.com";

    // Crear un campo de texto temporal
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);

    // Asignar el email al campo de texto temporal
    tempInput.value = email;

    // Seleccionar el texto del campo
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Ejecutar el comando de copiar
    document.execCommand("copy");

    // Eliminar el campo de texto temporal
    document.body.removeChild(tempInput);

    // Mensaje opcional de confirmación
    alert("Email copiado en el portapapeles");
}

// Asignar el evento de clic al ícono para copiar
document.getElementById("copyImg").addEventListener("click", copyEmailToClipboard);