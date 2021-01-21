let startData = [1,5,8,3,4,8,6,4,8];
const searchingNumber = Number(prompt('Enter searching number', '1'));

if (!isNaN(searchingNumber)) {
    let result = [];
    for (let i = 0; i < startData.length; i++) {
        if (startData[i] === searchingNumber) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        alert([-1, -1]);
    } else if (result.length === 1) {
        alert([result[0], -1])
    } else {
        alert([result[0], result[result.length-1]]);
    }
}