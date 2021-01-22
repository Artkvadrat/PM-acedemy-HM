let array1 = [1,2,3,4,5];
let array2 = [6,7,8];
let index = 1;

function uniteArrays (arr1, arr2, index) {
    let result = [];
    for (let i = 0; i < index; i++) {
        result.push(arr1[i]);
    }
    result.push(...arr2);
    for (let i = index; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    return result;
}

console.log(uniteArrays(array1, array2, index));