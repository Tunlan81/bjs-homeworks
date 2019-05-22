'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;

    let d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        let x = [];
        x[0] = ( - b + Math.pow(d, 0.5)) / (2 * a);
        x[1] = ( - b - Math.pow(d, 0.5)) / (2 * a);
        console.log(`Решения уравнения ${x[0]} и ${x[1]}.`);
        return x;
    } else if (d == 0) {
        let x = - b / (2 * a);
        console.log(`Решение уравнения ${x}.`);
        return x;
    } else {
        console.log('Решения уравнения не существует.');
    }

}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;

    let birthYear = dateOfBirthday.getFullYear();
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - birthYear;

    if (age >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }

    console.log(age);
    return age;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
    if (marks.length == 0) {
        console.log('Оценки не введены.');
        return;
    }
    if (marks.length > 5) {
        console.log('Введено более пяти оценок.');
        marks.splice(5, marks.length - 5);
    }

    let marksTotal = 0;
    
    for (let i = 0; i < marks.length; i++) {
        marksTotal += marks[i];
    }
    
    let averageMark = marksTotal / marks.length;
    console.log(`Средняя оценка (не более пяти оценок) ${averageMark}.`);
    return averageMark;
}
