function submitForm() {
    const firstString = document.getElementById('firstString').value;

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    let errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    let result = [];
    for (let i = 0; i < firstString.length; i++) {
        if (firstString.charCodeAt(i) >= 65 && firstString.charCodeAt(i) <= 90) {
            result.push(i);
        }
    }

    resultElement.innerHTML = `Uppercase letter${result.length > 1 ? 's are' : ' is'} on: ${result.join(', ')} index${result.length > 1 ? 'es.' : '.'}`;

}