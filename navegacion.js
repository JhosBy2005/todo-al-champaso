// Gestión de navegación y páginas

// Mostrar una página específica
function mostrarPagina(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.pagina');
    pages.forEach(page => page.classList.remove('activa'));

    // Mostrar la página seleccionada
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('activa');
        window.scrollTo(0, 0);
    }

    // Cerrar menú si está abierto
    cerrarMenu();
}

// Alternar menú en móvil
function alternarMenu() {
    const menu = document.getElementById('menuNav');
    if (menu) {
        menu.classList.toggle('activo');
    }
}

// Cerrar menú
function cerrarMenu() {
    const menu = document.getElementById('menuNav');
    if (menu) {
        menu.classList.remove('activo');
    }
}

// Verificar acceso a página protegida
function verificarAcceso(pageId) {
    const usuarioLogueado = obtenerDatos('usuarioLogueado');
    if (usuarioLogueado) {
        mostrarPagina(pageId);
    } else {
        abrirVentana();
    }
}

// Abrir ventana modal de acceso
function abrirVentana() {
    const ventana = document.getElementById('ventanaAcceso');
    if (ventana) {
        ventana.classList.add('activa');
    }
}

// Cerrar ventana modal
function cerrarVentana() {
    const ventana = document.getElementById('ventanaAcceso');
    if (ventana) {
        ventana.classList.remove('activa');
    }
}

// Actualizar visibilidad del menú protegido
function actualizarMenuProtegido() {
    const usuarioLogueado = obtenerDatos('usuarioLogueado');
    const itemsProtegidos = document.querySelectorAll('.menu-protegido');
    
    itemsProtegidos.forEach(item => {
        item.style.display = usuarioLogueado ? 'block' : 'none';
    });
}

// Evento para unirse a campaña
function unirseACampania(nombreCampania) {
    const usuarioLogueado = obtenerDatos('usuarioLogueado');
    if (usuarioLogueado) {
        alert(`¡Te has unido a la campaña: ${nombreCampania}`);
    } else {
        abrirVentana();
    }
}

// Abrir/cerrar mapa de impacto
function abrirMapaImpacto() {
    const modal = document.getElementById('modalMapaImpacto');
    if (modal) {
        modal.classList.add('activo');
    }
}

function cerrarMapaImpacto() {
    const modal = document.getElementById('modalMapaImpacto');
    if (modal) {
        modal.classList.remove('activo');
    }
}

// Inicializar navegación
document.addEventListener('DOMContentLoaded', function() {
    actualizarMenuProtegido();
});
