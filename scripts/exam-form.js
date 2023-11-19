
let btnSend = document.querySelector('#enviar')
btnSend.doc.addEventListener('click', mostrarExame)

function mostrarExame() {
    widow.alert('teste123')
    let name = document.getElementById('nome').value;
    let exam = document.getElementById('exames').value;
    let date = document.getElementById('data').value;

    if (exam === 'Exame de Sangue') {
        document.getElementById('exsangue-video').classList.remove('display-none');
        document.getElementById('exsange').classList.remove('display-none');
    }
}