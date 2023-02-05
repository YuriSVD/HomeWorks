//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let a = 2;
let b = 3;
rectangleSquare(a, b);
function rectangleSquare(a, b) {
    return a * b;
}
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let r = 5;
circleSquare(r);
function circleSquare(r) {
    return 2 * Math.PI * r;
}
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
r = 7;
let h = 10;
cylinderSquare(r, h);
function cylinderSquare(r, h) {
    return 2 * Math.PI * r * (h + r);
}
//- створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
functionForArray(array);
function functionForArray(array) {
    for (const data of array) {
        console.log(data);
    }
}
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textForParagraph = "Some text";
paragraphCreator(textForParagraph);
function paragraphCreator(text) {
    document.write(`<p>${text}</p>`);
}
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let textForLi = "Some text for li";
unOrderedListCreator(textForLi);
function unOrderedListCreator(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let countOfLi = 3;
unOrderedListCreatorWithCounter(textForLi, countOfLi);
function unOrderedListCreatorWithCounter(text, number) {
    /*let ul = document.querySelector("ul");
    for (let i = 0; i < number; i++) {
        let li = document.createElement("li");
        li.innerText = text;
        ul.append(li);
    }*/
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
listFromArray(array);
function listFromArray(array) {
    for (const data of array) {
        document.write(`<li>${data}</li>`);
    }
}
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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
docsFromUser(userArray);
function docsFromUser(array) {
    for (const user of array) {
        document.write(`<div>`);
        for (const userKey in user) {
            document.write(`<li>${userKey} : ${user[userKey]}</li>`); // ??
        }
        document.write(`</div>`);
    }
}
//- створити функцію яка повертає найменьше число з масиву
let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
minInt(intArray);
function minInt(array) {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minNumber > array[i]) {
            minNumber = array[i];
        }
    }
    return minNumber;
}
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
summaryOfArray(intArray);
function summaryOfArray(array) {
    let summary = 0;
    for (const number of array) {
        summary = summary + number;
    }
    console.log(summary);
}
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let index1 = 3;
let index2 = 7;
swap(intArray, index1, index2);
function swap(array, index1, index2) {
    let buffer = array[index1];
    array[index1] = array[index2];
    array[index2] = buffer;
}
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let money = 10000;
let typeOfExchange = [{currency : "USD", value : 40},{currency : "EUR", value : 42}];
let type = "USD";
exchange(money, typeOfExchange, type);
function exchange (money, typeOfExchange, type) {
    for (const exchange of typeOfExchange) {
        if (exchange.currency === type) {
            return money / exchange.value;
        }
    }
}