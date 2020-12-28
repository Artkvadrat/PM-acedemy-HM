function submitForm() {
    const firstNumber = Math.round(parseFloat(document.getElementById('firstNumber').value)) || 0;
    const secondNumber = Math.round(parseFloat(document.getElementById('secondNumber').value)) || 0;

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    let errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    let result = 0;
    if (firstNumber > secondNumber) {
        result = Math.floor(Math.random() * (firstNumber - secondNumber + 1) ) + secondNumber;
        resultElement.innerHTML = `Random number between ${secondNumber} and ${firstNumber} is: ${result}`;
    } else if (firstNumber < secondNumber) {
        result = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
        resultElement.innerHTML = `Random number between ${firstNumber} and ${secondNumber} is: ${result}`;
    } else {
        errorElement.innerHTML = 'You entered wrong values. Please, try again'
    }

}