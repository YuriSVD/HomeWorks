//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, 2, 3, 4, 5, "hello", "world", true, false, "okten"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.
let firstBook = {title : "firstTitle", pageCount : 100, genre : "firstGenre"};
let secondBook = {title : "secondTitle", pageCount : 200, genre : "secondGenre"};
let thirdBook = {title : "thirdTitle", pageCount : 300, genre : "thirdGenre"};
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let anotherFirstBook = {title : "first_title",
    pageCount : 100,
    genre : "firstGenre",
    authors : {name : "firstName", age : 30}};
let anotherSecondBook = {title : "second_title",
    pageCount : 200,
    genre : "secondGenre",
    authors : {name : "secondName", age : 40}};
let anotherThirdBook = {title : "third_title",
    pageCount : 300,
    genre : "thirdGenre",
    authors : {name : "thirdName", age : 50}};
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let userArray = [user1 = {name : "name1", username : "username1", password : "password1"},
    user2 = {name : "name2", username : "username2", password : "password2"},
    user3 = {name : "name3", username : "username3", password : "password3"},
    user4 = {name : "name4", username : "username4", password : "password4"},
    user5 = {name : "name5", username : "username5", password : "password5"},
    user6 = {name : "name6", username : "username6", password : "password6"},
    user7 = {name : "name7", username : "username7", password : "password7"},
    user8 = {name : "name8", username : "username8", password : "password8"},
    user9 = {name : "name9", username : "username9", password : "password9"},
    user10 = {name : "name10", username : "username10", password : "password10"}];
console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
//a === 0 ? console.log("Не вірно") : console.log("Вірно");
if (a !== 0) {
    console.log("Вірно")
} else {
    console.log("Не вірно")
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 1;  // let time = Math.round(Math.random() * 59);
if (time >= 0 && time < 15) {
    console.log("Перша частина години")
} else if (time >= 15 && time < 30) {
    console.log("Друга частина години")
} else if (time >= 30 && time < 45) {
    console.log("Третя частина години")
} else if (time >= 45 && time < 60) {
    console.log("Четверта частина години")
} else {
    console.log("Невідповідне число")
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1;
if (day > 0 && day <=10) {
    console.log("Перша декада місяця")
} else if (day > 10 && day <= 20) {
    console.log("Друга декада місяця")
} else if (day > 20 && day <= 31) {
    console.log("Третя декада місяця")
} else {
    console.log("Невідповідне число місяця")
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = 1;
switch (dayOfWeek) {
    case 1: console.log("Task for monday");
    break;
    case 2: console.log("Task for tuesday");
    break;
    case 3: console.log("Task for wednesday");
    break;
    case 4: console.log("Task for thursday");
    break;
    case 5: console.log("Task for friday");
    break;
    case 6: console.log("Task for Saturday");
    break;
    case 7: console.log("Task for Sunday");
    break;
    default: console.log("Wrong number of week");
}
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstInt = 1;
let secondInt = 2;
if (firstInt > secondInt) {
    console.log(firstInt)
} else if (secondInt > firstInt) {
    console.log(secondInt)
} else {
    console.log("Числа рівні")
}
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x;
if (x === 0 || x === "" || isNaN(x) || x === null || x === false) {
    x = "default";
    console.log(x);
}
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}