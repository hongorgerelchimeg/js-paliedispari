// Esercizio 1

const btnCheck = document.querySelector('#check');


btnCheck.addEventListener('click', function() {

    const input = document.querySelector('#user-input');
    const output = document.querySelector('.output');
    let userValue = input.value ;
    console.log(userValue);

    let reverseInput = '';
    for (let index = userValue.length-1; index >= 0 ; index--) {
        console.log(index);
        console.log(reverseInput);
        console.log(userValue[index]);
        reverseInput += userValue[index];
    }
    
    if (userValue == reverseInput) {
        return output.innerHTML = "è una palidroma";
    } else {
        return output.innerHTML = "non è una palidroma";
    }
    
})


// function palidroma(a) {
//     let reverseInput;
//     for (let index = a.length; index > 0 ; index--) {
        
//         reverseInput += userValue[index];
//     }
    
//     if (userValue == reverseInput) {
//         return console.log('è una palidroma');
//     } else {
//         return console.log('non è una palidroma');
//     }
    
// }

// Esercizio 2

const btnStart = document.querySelector('#start');


btnStart.addEventListener('click', function() {

    const inputNumber = document.querySelector('#user-input-3');
    const inputFinal = document.querySelector('#user-input-2');
    const outputGioco = document.querySelector('.output-gioco');
    let userNumber = parseInt(inputNumber.value) ;
    let userFinal = inputFinal.value ;
    console.log(userNumber);
    console.log(userFinal);

    let computerNumber = randomNum(1, 5);
    console.log(computerNumber);

    const result = pariDispari(userNumber, computerNumber);

    if ( result == userFinal) {
        return outputGioco.innerHTML = `computer ha scelto: ${computerNumber}, tu hai scelto: ${userNumber} , somma  è ${userFinal}, hai vinto!`;
    } else {
         return outputGioco.innerHTML = `computer ha scelto: ${computerNumber}, tu hai scelto: ${userNumber} , somma non è ${userFinal}, hai perso!`;
    }

});

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function pariDispari(a, b) {
    console.log(a, b);
    if ((a + b) % 2 == 0) {
        return "Pari";
    } else {
        return "Dispari";
    }
}