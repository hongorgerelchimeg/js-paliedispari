const btnCheck = document.querySelector('#check');


btnCheck.addEventListener('click', function() {

    const input = document.querySelector('#user-input');
    const output = document.querySelector('.output');
    userValue = input.value ;
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


// function palidroma(userValue) {
//     let reverseInput;
//     for (let index = userValue.length; index > 0 ; index--) {
        
//         reverseInput += userValue[index];
//     }
    
//     if (userValue == reverseInput) {
//         return console.log('è una palidroma');
//     } else {
//         return console.log('non è una palidroma');
//     }
    
// }



