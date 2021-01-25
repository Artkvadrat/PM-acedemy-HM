const assert = require('assert');

function flatWhite(params) {
    let result = [];
    params.map((item) => {
        if (typeof item === 'object') {
            result.push(...item);
        } else {
            result.push(item);
        }
    })

    return result;
}

assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);

assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);

console.log('Looks good');