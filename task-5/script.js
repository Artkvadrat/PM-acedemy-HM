function submitForm() {
    const firstString = document.getElementById('firstString').value;
    const secondString = document.getElementById('secondString').value;

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    let errorElement = document.getElementById('error');
    errorElement.innerHTML = '';

    let result = [];
    let pos = 0;
    while (true) {
        let foundPosition = firstString.indexOf(secondString, pos);
        if (foundPosition === -1) break;

        result.push(foundPosition);
        pos = foundPosition+1;
    }

    if (result.length === 0) {
        errorElement.innerHTML = 'The first string doesn\'t contain the second string. Please, try again.';
    } else {
        resultElement.innerHTML = `Occurrence indexes of second string in first ${result.length > 1 ? 'are' : 'is'}: ${result.join(', ')}`;
    }
}