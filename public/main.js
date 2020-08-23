const socket = io();

let stageMenssage = document.querySelector('#stageMessage');
let inputWrite = document.querySelector('#write');

let btnSend = document.querySelector('#send');

btnSend.addEventListener('click', () => {
    if (inputWrite.value === "") {
        console.log('no se puede enviar');
    } else {
        socket.emit('messageSend', (inputWrite.value));
        console.log("!");
        inputWrite.value = '';
    }
});
inputWrite.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        if (inputWrite.value === "") {
            console.log('no se puede enviar');
        } else {
            socket.emit('messageSend', (inputWrite.value));
            inputWrite.value = '';
        }
    }

});

socket.on('messageRequest', (data) => {
    if (data.id === socket.id) {
        stageMenssage.innerHTML += `
        <div class="messageSend">
            <div class="text">${data.data}</div>
        </div>`;
    } else {
        stageMenssage.innerHTML += `
        <div class="messageRequest">
            <div class="text">${data.data}</div>
        </div>`;
    }

});