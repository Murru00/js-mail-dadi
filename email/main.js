const resultElement = document.getElementById('result');

resultElement.innerHTML = ('Sei pronto a giocare?');


//GENERO UN NUMERO RANDOM TRA 1 E 6

const guestNumber = Math.floor(Math.random() * 6 + 1);
alert('hai tirato ' + guestNumber);

const computerNumber = Math.floor(Math.random() * 6 + 1);
alert('il pc ha tirato ' + computerNumber);