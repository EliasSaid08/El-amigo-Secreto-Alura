// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Función para validar el nombre
function validarNombre(nombre) {
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return false;
    }

    // Validar longitud del nombre
    if (nombre.length > 30) {
        alert("El nombre no puede tener más de 30 caracteres.");
        return false;
    }

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    // Validar que no contenga caracteres especiales (solo letras y espacios)
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener caracteres especiales o números.");
        return false;
    }

    // Validar que el nombre no esté duplicado
    const listaAmigos = document.getElementById('listaAmigos').children;
    for (let amigo of listaAmigos) {
        if (amigo.textContent.toLowerCase() === nombre.toLowerCase()) {
            alert("Este nombre ya está en la lista.");
            return false;
        }
    }

    return true; // Si pasa todas las validaciones
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar el nombre antes de agregarlo
    if (!validarNombre(nombre)) {
        return; // Si la validación falla, no se agrega el nombre
    }

    // Obtener la lista de amigos y crear un nuevo elemento de lista
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    nuevoAmigo.classList.add('list-item');

    // Añadir el nuevo amigo a la lista
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el campo de entrada
    input.value = '';

    // Mostrar mensaje de éxito
    alert("Amigo agregado correctamente.");
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').children;

    // Verificar si hay nombres en la lista
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio].textContent;

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Event listeners para los botones
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});