// Gestión de validación y envío de formularios

// Mostrar alerta
function mostrarAlerta(contenedorId, mensaje, tipo) {
    const alerta = document.getElementById(contenedorId);
    if (alerta) {
        alerta.textContent = mensaje;
        alerta.classList.remove('alerta-exito', 'alerta-error');
        alerta.classList.add(tipo === 'exito' ? 'alerta-exito' : 'alerta-error', 'mostrar');
    }
}

// Validar email
function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Enviar formulario de reporte
function enviarReporte(evento) {
    evento.preventDefault();

    const distrito = document.getElementById('distrito').value;
    const direccion = document.getElementById('direccion').value;
    const descripcion = document.getElementById('descripcion').value;
    const correo = document.getElementById('correo-reporte').value;

    if (!distrito || !direccion || !descripcion || !correo) {
        mostrarAlerta('alerta-reporte', 'Por favor completa todos los campos', 'error');
        return;
    }

    if (!esEmailValido(correo)) {
        mostrarAlerta('alerta-reporte', 'Email inválido', 'error');
        return;
    }

    mostrarAlerta('alerta-reporte', 'Reporte enviado exitosamente', 'exito');
    document.getElementById('formularioReporte').reset();
}

// Enviar formulario de contacto
function enviarContacto(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre-contacto').value;
    const correo = document.getElementById('correo-contacto').value;
    const telefono = document.getElementById('telefono-contacto').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !correo || !telefono || !asunto || !mensaje) {
        mostrarAlerta('alerta-contacto', 'Por favor completa todos los campos', 'error');
        return;
    }

    if (!esEmailValido(correo)) {
        mostrarAlerta('alerta-contacto', 'Email inválido', 'error');
        return;
    }

    mostrarAlerta('alerta-contacto', 'Mensaje enviado exitosamente', 'exito');
    document.getElementById('formularioContacto').reset();
}

// Escuchar envío de formularios
document.addEventListener('DOMContentLoaded', function() {
    const formReporte = document.getElementById('formularioReporte');
    if (formReporte) {
        formReporte.addEventListener('submit', enviarReporte);
    }

    const formContacto = document.getElementById('formularioContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', enviarContacto);
    }
});
