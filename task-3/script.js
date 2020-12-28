function submitForm() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value) || 0;
    const secondNumber = parseFloat(document.getElementById('secondNumber').value) || 0;

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    let firstResult = Math.round(firstNumber*0.3);
    let secondResult = Math.round(secondNumber*0.3);

    resultElement.innerHTML = `First number = ${firstResult} <br/> Second Number = ${secondResult}`;
}