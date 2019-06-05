//1

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) return false;
    }
    return true;
}

function memoize(fn, limit) {
    let results = [];

    function calculateAndRemember() {
        let args = Array.from(arguments).join(', ');
        existingResult = results.find(result => compareArrays(result.args, args));
        if (existingResult) {
            console.log('Результат берется из памяти.');
            return existingResult.result;
        }
        results.push({args: args, result: fn(...arguments)})
        if (results.length > limit) {
            results.splice(0, 1);
        }

        console.log('Результат берется НЕ из памяти.');
        return results[results.length - 1].result;
    }

    return calculateAndRemember;  
}

// Check
const sum = (a, b) => a + b;

const mSum = memoize(sum, 2);

console.log(mSum(3, 4));

console.log(mSum(3, 4));

console.log(mSum(5, 4));

console.log(mSum(7, 4));

console.log(mSum(3, 4));
