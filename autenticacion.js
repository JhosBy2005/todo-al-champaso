// Gestión de autenticación

// Crear cuenta
function crearCuenta(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmar-contrasena').value;

    // Validar
    if (!nombre || !apellido || !correo || !telefono || !contrasena) {
        mostrarAlerta('alerta-cuenta', 'Por favor completa todos los campos', 'error');
        return;
    }

    if (contrasena.length < 8) {
        mostrarAlerta('alerta-cuenta', 'La contraseña debe tener al menos 8 caracteres', 'error');
        return;
    }

    if (contrasena !== confirmarContrasena) {
        mostrarAlerta('alerta-cuenta', 'Las contraseñas no coinciden', 'error');
        return;
    }

    // Guardar usuario
    const usuario = { nombre, apellido, correo, telefono };
    guardarDatos('usuarioLogueado', usuario);
    guardarDatos('usuarios', [usuario]);

    mostrarAlerta('alerta-cuenta', 'Cuenta creada exitosamente', 'exito');
    setTimeout(() => {
        mostrarPagina('inicio');
        actualizarMenuProtegido();
        document.getElementById('formularioCuenta').reset();
    }, 1500);
}

// Iniciar sesión
function iniciarSesion(evento) {
    evento.preventDefault();

    const correo = document.getElementById('correo-sesion').value;
    const contrasena = document.getElementById('contrasena-sesion').value;

    if (!correo || !contrasena) {
        mostrarAlerta('alerta-sesion', 'Por favor completa todos los campos', 'error');
        return;
    }

    // Simular verificación (en producción, hacer petición al servidor)
    const usuario = { correo };
    guardarDatos('usuarioLogueado', usuario);

    mostrarAlerta('alerta-sesion', 'Sesión iniciada exitosamente', 'exito');
    setTimeout(() => {
        mostrarPagina('inicio');
        actualizarMenuProtegido();
        document.getElementById('formularioSesion').reset();
    }, 1500);
}

// Cerrar sesión
function cerrarSesion() {
    limpiarDatos();
    mostrarPagina('inicio');
    actualizarMenuProtegido();
}

// Escuchar envío de formularios
document.addEventListener('DOMContentLoaded', function() {
    const formCuenta = document.getElementById('formularioCuenta');
    if (formCuenta) {
        formCuenta.addEventListener('submit', crearCuenta);
    }

    const formSesion = document.getElementById('formularioSesion');
    if (formSesion) {
        formSesion.addEventListener('submit', iniciarSesion);
    }
});
