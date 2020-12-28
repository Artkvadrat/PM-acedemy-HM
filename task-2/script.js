const arrowVariant = (basis, exponent) => {
    return Math.pow(basis, exponent);
}

const functionExpression = function (basis, exponent) {
    return Math.pow(basis, exponent);
}

function submitForm() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value) || 2;

    let errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (!isNaN(firstNumber)) {
        resultElement.innerHTML = `Result of arrow function: ${arrowVariant(firstNumber, secondNumber)} <br/>`;
        resultElement.innerHTML += `Result of function expresion: ${functionExpression(firstNumber, secondNumber)}`;
    } else {
        errorElement.innerText = 'Error. Please enter valid number';
    }
}