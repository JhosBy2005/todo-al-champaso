// Archivo principal de la aplicación - Cargar componentes

document.addEventListener('DOMContentLoaded', async function() {
    console.log('Inicializando SeedAir...');

    // Cargar header
    await cargarHTML('components/header.html', 'header-container');

    // Cargar modal
    await cargarHTML('components/modal-acceso.html', 'modal-container');

    // Cargar páginas
    const paginas = [
        { url: 'pages/inicio.html', id: 'pages-container', append: true },
        { url: 'pages/auth/crear-cuenta.html', id: 'pages-container', append: true },
        { url: 'pages/auth/iniciar-sesion.html', id: 'pages-container', append: true },
        { url: 'pages/campanias.html', id: 'pages-container', append: true },
        { url: 'pages/reportar.html', id: 'pages-container', append: true },
        { url: 'pages/impacto.html', id: 'pages-container', append: true },
        { url: 'pages/servicios.html', id: 'pages-container', append: true },
        { url: 'pages/recursos.html', id: 'pages-container', append: true },
        { url: 'pages/equipo.html', id: 'pages-container', append: true },
        { url: 'pages/nosotros.html', id: 'pages-container', append: true },
        { url: 'pages/contacto.html', id: 'pages-container', append: true }
    ];

    for (const pagina of paginas) {
        try {
            const response = await fetch(pagina.url);
            if (!response.ok) throw new Error(`Error al cargar ${pagina.url}`);
            const html = await response.text();
            const contenedor = document.getElementById(pagina.id);
            if (pagina.append) {
                contenedor.innerHTML += html;
            } else {
                contenedor.innerHTML = html;
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Cargar footer
    await cargarHTML('components/footer.html', 'footer-container');

    // Actualizar menú protegido
    actualizarMenuProtegido();

    console.log('SeedAir inicializado correctamente');
});
