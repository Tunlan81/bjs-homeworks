'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;
 
    if (isNaN(new Number(amount)) || new Number(amount) < 0) {
        console.log(`Параметр сумма кредита содержит неправильное значение ${amount}`)
        return;
    } else if (isNaN(new Number(contribution)) || new Number(contribution) < 0) {
        console.log(`Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`)
        return;
    } else if (isNaN(new Number(percent)) || new Number(percent) < 0) {
        console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`)
        return;
    }

    if (isNaN(new Number(new Date(date).getFullYear())) || isNaN(new Number(new Date(date).getMonth())) || isNaN(new Number(new Date(date).getUTCDate()))) {
        console.log(`Параметр дата последней выплаты содержит неправильное значение ${date}`);
        return;
    }
    
    if (new Date(date) < new Date()) {
        console.log(`Параметр дата последней выплаты содержит значение ${date}, которое меньше текущей даты`);
        return;
    }

    date = new Date(date);
    let S = new Number(amount) - new Number(contribution);
    let P = new Number(percent) / 12 / 100;
    let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));

    if (S <= 0) {
        console.log(`Параметр сумма кредита меньше параметра сумма первоначального взноса`);
        return;
    }

    let monthlyPayment = S * ( P + P / (Math.pow( 1 + P , n) - 1));
    let totalAmount = monthlyPayment * n;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;

    if (name == '' || name == null || name == undefined) {
        name = 'Аноним'
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}
