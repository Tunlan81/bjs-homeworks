function getSolutions( a, b, c ) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return { D: D };
    } else if (D == 0) {
        let x1 = - b / (2 * a);
        return {roots: [x1], D: D};
    } else {
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        return { roots: [x1, x2], D: D};
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
    console.log(`Значение дискриминанта: ${result.D}.`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней.`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}.`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}.`);
    }
}

/* Check code 1
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2); */

function getAverageScore( data ) {
    let totalMarks = 0;
    let totalDisciplines = 0;
    for(let discipline in data) {
        let averageMark = getAverageMark(data[discipline]);
        totalMarks += averageMark;
        totalDisciplines++;
        data[discipline] = averageMark;
    }
    data.average = totalMarks / totalDisciplines
    console.log(data);
}

function getAverageMark( data ) {
    let marksTotal = 0;
    for (let i = 0; i < data.length; i++) {
        marksTotal += data[i];
    }
    return marksTotal / data.length;
}



/* Check code 2
console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
})) */

function getPersonData( secretData ) {
    function getName(code) {
        if (code == 0) return 'Родриго';
        if (code == 1) return 'Эмильо';
    }
    return { firstName: getName( secretData.aaa ), lastName: getName( secretData.bbb ) }
}

/* Check code 3
console.log( getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log( getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log( getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log( getPersonData({
    aaa: 1,
    bbb: 1
})); */