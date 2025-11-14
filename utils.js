// Funciones auxiliares compartidas

// Cargar un archivo HTML y insertarlo en un contenedor
async function cargarHTML(url, contenedorId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error al cargar ${url}`);
        const html = await response.text();
        document.getElementById(contenedorId).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Mostrar/ocultar elemento
function toggleElemento(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.classList.toggle('activo');
    }
}

// Agregar clase a elemento
function agregarClase(id, clase) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.classList.add(clase);
}

// Remover clase de elemento
function removerClase(id, clase) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.classList.remove(clase);
}

// Limpiar localStorage
function limpiarDatos() {
    localStorage.clear();
}

// Guardar datos en localStorage
function guardarDatos(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

// Obtener datos de localStorage
function obtenerDatos(clave) {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : null;
}
