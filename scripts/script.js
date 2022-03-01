const btnCheck = document.querySelector('#check');


btnCheck.addEventListener('click', function() {

    const input = document.querySelector('#user-input');
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
        return console.log('è una palidroma');
    } else {
        return console.log('non è una palidroma');
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



