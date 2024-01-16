const resultElement = document.getElementById('result');

resultElement.innerHTML = ('Sei pronto a giocare?');


//GENERO UN NUMERO RANDOM TRA 1 E 6

const guestNumber = Math.floor(Math.random() * 6 + 1);
alert('hai tirato ' + guestNumber);

const computerNumber = Math.floor(Math.random() * 6 + 1);
alert('il pc ha tirato ' + computerNumber);

//UTENTE E PC TIRANO I DADI E VINCE CHI HA IL NUMERO PIU' ALTO

if (guestNumber > computerNumber) {
    resultElement.innerHTML = ('hai vinto tu');
} else if (guestNumber < computerNumber) {
    resultElement.innerHTML = ('ha vinto il pc');
} else if (guestNumber == computerNumber) {
    resultElement.innerHTML = ('pareggio');
}