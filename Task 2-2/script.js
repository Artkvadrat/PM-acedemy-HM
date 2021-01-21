let arr1 = [1, 3, 2, 1];
let arr2 = [2, 2];

let result = [];

arr2.map((arr2Item) => {
    let length = arr1.length;
    for (let i = 0; i < length; i++) {
        if (arr2Item === arr1[i]) {
            result.push(arr2Item);
            arr1.splice(i, 1);
            break;
        }
    }
});

console.log(result);