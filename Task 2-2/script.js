let arr1 = [1, 3, 2, 1, 2 , 4, 5];
let arr2 = [2, 5];

let result = [];

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) {
            result.push(arr2[i]);
            arr1.splice(j, 1);
            break;
        }
    }
}

console.log(result);