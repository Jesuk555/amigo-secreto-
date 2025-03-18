// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    amigos.push(nombre);
    input.value = '';
    
    const lista = document.getElementById('listaAmigos');
    const elemento = document.createElement('li');
    elemento.textContent = nombre;
    elemento.classList.add('nombre-item');
    lista.appendChild(elemento);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo primero');
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto sorteado es: <span class="nombre-ganador">${amigos[indice]}</span>! 🎉</li>`;
}