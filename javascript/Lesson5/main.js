//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleSquare = (a, b) => a * b;
console.log(rectangleSquare(2, 4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleSquare = r => 2 * Math.PI * r;
console.log(circleSquare(3));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSquare = (h, r) => 2 * Math.PI * r * (h + r);
console.log(cylinderSquare(5, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let functionForArray = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
functionForArray(array);
//let functionForArray = array.forEach(data => console.log(data)); ///???
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraphCreator = text => document.write(`<p>${text}</p>`);
let text = "Some text";
paragraphCreator(text);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let funcWithUlAndLi = text => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`);
};
funcWithUlAndLi(text);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let funcWithUlAndCountOfLi = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
let countOfLi = 3;
funcWithUlAndCountOfLi(text, countOfLi);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listFromArray = array => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
}
listFromArray(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userArray = [user1 = {id : 1, name : "name1", age : 21},
    user2 = {id : 2, name : "name2", age : 22},
    user3 = {id : 3, name : "name3", age : 23},
    user4 = {id : 4, name : "name4", age : 24},
    user5 = {id : 5, name : "name5", age : 25},
    user6 = {id : 6, name : "name6", age : 26},
    user7 = {id : 7, name : "name7", age : 27},
    user8 = {id : 8, name : "name8", age : 28},
    user9 = {id : 9, name : "name9", age : 29},
    user10 = {id : 10, name : "name10", age : 30}];
let docsFromUser = (array) => {
    for (let user of array) {
        document.write(`<div>`);
        for (const key in user) {
            document.write(`<li>${key} : ${user[key]}</li>`);
        }
        document.write(`</div>`);
    }
}
docsFromUser(userArray);
// - створити функцію яка повертає найменьше число з масиву
let minInt = array => {
    let minInt = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minInt > array[i]) {
            minInt = array[i];
        }
    }
    return minInt;
}
let minNumber = minInt(array);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumOfNumbers = array => {
    let summery = 0;
    for (const number of array) {
        summery = summery + number;
    }
    return summery;
}
let summery = sumOfNumbers(array);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (array, index1, index2) => {
    let buffer = array[index1];
    array[index1] = array[index2];
    array[index2] = buffer;
}
swap(array, 0, 1);
console.log(array);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (money, typesOfExchange, typeToExchange) => {
    for (let type of typesOfExchange) {
        if (type.currency === typeToExchange) {
            return money / type.value;
        }
    }
}
let sumUAH = 10000;
let currencyValues = [{currency : "USD", value : 40},{currency : "EUR", value : 42}];
let exchangeCurrency = "USD";
exchange(sumUAH, currencyValues, exchangeCurrency);
