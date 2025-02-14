const API_URL = 'http://localhost:3000/ganadores';

function buscarGanador() {
    const id = document.getElementById('idMundial').value;
    if (!id) {
        alert('Ingresa un número válido');
        return;
    }

    fetch(`${API_URL}`)
        .then(response => response.json())
        .then(data => {
            const ganador = data.find(g => g.id == id);
            mostrarGanador(ganador);
        })
        .catch(error => console.error('Error:', error));
}

function mostrarGanador(ganador) {
    if (!ganador) {
        document.getElementById('resultado').innerHTML = '<p>No encontrado</p>';
        return;
    }

    document.getElementById('resultado').innerHTML = `
        <h2>${ganador.pais} (${ganador.fecha.split('-')[0]})</h2>
        <p>Continente: ${ganador.continente}</p>
        <p>País anfitrión: ${ganador.anfitrion}</p>
        <img src="http://localhost:3000/banderas/${ganador.bandera}" alt="Bandera de ${ganador.pais}">
    `;
}
