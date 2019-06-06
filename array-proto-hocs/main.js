//1

function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]));
}

function memoize(fn, limit) {
    let results = [];

    return function () {
        existingResult = results.find(result => compareArrays(result.args, Array.from(arguments)));
        if (existingResult) {
            console.log('Результат берется из памяти.');
            return existingResult.result;
        }
        results.push({args: Array.from(arguments), result: fn(...arguments)})
        if (results.length > limit) results.shift();
        console.log('Результат берется НЕ из памяти.');
        return results[results.length - 1].result;
    }
}

// Check
const sum = (a, b) => a + b;

const mSum = memoize(sum, 2);

console.log(mSum(3, 4));

console.log(mSum(3, 4));

console.log(mSum(5, 4));

console.log(mSum(7, 4));

console.log(mSum(3, 4));

console.log(mSum(3, 4));
