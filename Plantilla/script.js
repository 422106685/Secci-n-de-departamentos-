// script.js

// Arreglo con los datos de los departamentos (El nuevo formato de tarjetas)
const departamentos = [
    {
        nombre: "Departamento de Investigación en Comunicación y Estudios Culturales",
        icono: "📊"
    },
    {
        nombre: "Departamento de Tecnología Ambiental",
        icono: "🌿"
    },
    {
        nombre: "Departamento de Innovación Educativa",
        icono: "💡"
    },
    {
        nombre: "Departamento de Proyección Empresarial",
        icono: "🏢"
    }
];

// Función que se ejecuta cuando la página ha cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos el contenedor HTML donde irán las tarjetas
    const contenedor = document.getElementById("tarjetas-contenedor");

    // Recorremos nuestros datos y creamos el HTML para cada tarjeta
    departamentos.forEach(depto => {
        // Creamos un elemento div
        const tarjeta = document.createElement("div");
        tarjeta.className = "new-format-card"; // Clase definida en el CSS

        // Le insertamos la estructura HTML interna
        tarjeta.innerHTML = `
            <div class="card-icon">${depto.icono}</div>
            <div class="card-text">${depto.nombre}</div>
        `;

        // Agregamos la tarjeta terminada al contenedor principal
        contenedor.appendChild(tarjeta);
    });

    console.log("Tarjetas cargadas dinámicamente con éxito.");
});