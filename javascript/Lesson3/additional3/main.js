//1. Створити пустий масив та :
//a. заповнити його 50 парними числами за допомоги циклу.
let firstArray = [];
for (let i = 0; i <= 50; i++) {
    if (i % 2) {
        firstArray[i] = i + 1;
    } else {
        firstArray[i] = i + 2;
    }
}
//b. заповнити його 50 непарними числами за допомоги циклу.
let secondArray = [];
for (let i = 0; i < 50; i++) {
    if (i % 2) {
        secondArray[i] = i;
    } else {
        secondArray[i] = i + 1;
    }
}
//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let randomArray = [];
for (let i = 0; i < 20; i++) {
    randomArray[i] = Math.random();
}
//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let anotherRandomArray = [];
for (let i = 0; i < 20; i++) {
    anotherRandomArray[i] = Math.round((Math.random() * 724) + 8); // із заокругленням красивіше
}
//2. Вивести за допомогою console.log кожен третій елемен
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (!((i + 1) % 3)) {
        console.log(array[i]);
    }
}
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < array.length; i++) {
    if (!((i + 1) % 3) && !(array[i] % 2)) {
        console.log(array[i]);
    }
}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let copyArray = [];
for (let i = 0; i < array.length; i++) {
    if (!((i + 1) % 3) && !(array[i] % 2)) {
        console.log(array[i]);
        copyArray[copyArray.length] = array[i];
    }
}
//5. Вивести кожен елемент масиву, сусід справа якого є парним
let exampleArray = [1, 2, 3, 5, 9, 56, 8, 67];
for (let i = 1; i < exampleArray.length; i++) {
    if (!(exampleArray[i] % 2)) {
        console.log(exampleArray[i - 1]);
    }
}
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let prizeArray = [100, 250, 50, 168, 120, 345, 188];
let totalPrize = 0;
for (let prize of prizeArray) {
    totalPrize = totalPrize + prize;
}
console.log(`Загальна сума покупок: ${totalPrize}`);
console.log(`Середня вартість товару у чеку: ${(totalPrize / prizeArray.length).toFixed(2)}`);
//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let ranArray = [];
let copyRanArray = [];
for (let i = 0; i < 5; i++) {
    ranArray[i] = Math.random();
    copyRanArray[copyRanArray.length] = ranArray[i] * 5;
}
//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mixArray = [1, true, "hello", 3, 7];
let anotherMixArray = [];
for (let data of mixArray) {
    if (typeof data === "number") {
        anotherMixArray[anotherMixArray.length] = data;
    }
}
//- Дано 2 масиви з рівною кількістю об'єктів.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithCities = [];
for (let user of usersWithId) {
    usersWithCities[usersWithCities.length] = {user, address: {

    }}
}
console.log(usersWithCities);
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
for (let number of array) {
    if (!(number % 2)) {
        console.log(number);
    }
}
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let copyInt = [];
for (let number of array) {
    copyInt[copyInt.length] = number;
}
//- Дано масив:
let strArray = ["a", "b", "c"];
let word = "";
// - За допомогою циклу for зібрати всі букви в слово.
for (let i = 0; i < strArray.length; i++) {
    word = word + strArray[i];
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
word = "";
i = 0;
while (i < strArray.length) {
    word = word + strArray[i];
    i++;
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = "";
for (let str of strArray) {
    word = word + str;
}