// main.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Si bajamos más de 50px, cambiamos el estilo
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 50px";
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
        // Si estamos arriba, volvemos al estilo original
        navbar.style.padding = "15px 50px";
        navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
    }
});

// Opcional: Mensaje en consola para verificar que cargó
console.log("Página cargada correctamente. Eventos Villa Prada.");