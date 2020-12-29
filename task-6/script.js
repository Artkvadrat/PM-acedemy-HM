function submitForm() {
    const firstString = document.getElementById('firstString').value;

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    let errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    let result = [];
    for (let i = 0; i < firstString.length; i++) {
        result.push(firstString.charCodeAt(i));
    }

    resultElement.innerHTML = `All numeric values in string ${result.length > 1 ? 'are' : 'is'}: ${result.join(', ')}`;

}