function submitForm() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);

    let errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    let result = [];

    if (firstNumber === secondNumber || firstNumber+1 === secondNumber || firstNumber === secondNumber+1) {
        errorElement.innerHTML = 'Enter valid numbers pls';
    } else if (firstNumber < secondNumber) {
        for (let i = firstNumber+1; i < secondNumber; i++) {
            result.push(i);
        }
        resultElement.innerHTML = `Digits between ${firstNumber} and ${secondNumber} ${ result.length > 1 ? 'are' : 'is' }: ${result.join(', ')}`;
    } else if (firstNumber > secondNumber) {
        for (let i = secondNumber+1; i < firstNumber; i++) {
            result.push(i);
        }
        resultElement.innerHTML = `Digits between ${secondNumber} and ${firstNumber} ${ result.length > 1 ? 'are' : 'is' }: ${result.join(', ')}`;
    } else {
        errorElement.innerText = 'Something went wrong, please try again.'
    }
}