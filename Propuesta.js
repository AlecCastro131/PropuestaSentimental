document.getElementById('answer-button').addEventListener('click', function() {
    var answer = document.getElementById('answer-input').value;
    console.log('Respuesta: ' + answer);

    if (answer === "Si") {
        alert('Gracias por darme otra oportunidad, no te voy a decepcionar 😁.');
    } else if (answer === "No") {
        alert('Lo intente, tal vez no era el momento aún, gracias 🙂.');
    } else {
        alert('Solo acepta un "Si" o un "No"');
    }
});