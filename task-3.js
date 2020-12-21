const months = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
};

const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let enteredData = window.prompt('Enter the name or number of the month', '1');

let data = Number(enteredData);

if (!data) {
    if (months[enteredData]) {
        alert('Month number: ' + months[enteredData]);
    } else {
        alert('You have entered wrong data, please try again');
    }
} else if (typeof data === "number" && data >= 1 && data <= 12) {
    alert('Name of month: ' + monthsArray[data-1]);
} else {
    alert('You have entered wrong data, please try again');
}

