//- Сворити масив не цензцрних слів.
let block = document.createElement("div");
let uncensoredArray = ["сука", "блять", "хуй", "єбати", "довбойоб"];
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let input = document.createElement("input");
input.type = "text";
let button = document.createElement("button");
button.innerText = "Check";
block.append(input, button);
document.body.append(block);
button.onclick = function () {
    for (let uncensoredWord of uncensoredArray) {
        if (uncensoredWord === input.value) {
            alert("Стеж за словами, молодий чоловіче");
        }
    }
}
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
let anotherBlock = document.createElement("div");
let anotherInput = document.createElement("input");
anotherInput.type = "text";
let anotherButton = document.createElement("button");
anotherButton.innerText = "Check";
anotherBlock.append(anotherInput, anotherButton);
document.body.append(anotherBlock);
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
anotherButton.onclick = function () {
    let inputArray = anotherInput.value.split(" ");
    for (let inputWord of inputArray) {
        for (let uncensoredWord of uncensoredArray) {
            if (inputWord === uncensoredWord) {
                alert("Полегше, друже");
            }
        }
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let title = document.createElement("button");
title.innerText = "Pint Floyd";
let info = document.createElement("div");
let p = document.createElement("p");
p.innerText = "Pink Floyd are an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished by their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.";
info.appendChild(p);
info.style.maxHeight = "0px";
info.style.overflow = "none";
info.style.overflow = "hidden";
document.body.append(title, info);
title.onclick = function () {
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
        info.style.maxHeight = null;
    }
}
// - Создать список комментариев, пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let commentArray = [{title: "vasia", body: "some comment"},
    {title: "petya", body: "another comment"},
    {title: "max", body: "some another comment"}];
for (let comment of commentArray) {
    let div = document.createElement("div");
    let anotherTitle = document.createElement("button");
    anotherTitle.classList = "accordion";
    anotherTitle.innerText = comment.title;
    let divBody = document.createElement("div");
    divBody.innerText = comment.body;
    divBody.style.maxHeight = "0px";
    divBody.style.overflow = "none";
    divBody.style.overflow = "hidden";
    div.append(anotherTitle, divBody);
    document.body.appendChild(div);
}
let buttons = document.getElementsByClassName("accordion");
for (let button of buttons) {
    button.addEventListener("click", function () {
        if (button.nextElementSibling.style.display === "block") {
            button.nextElementSibling.style.display = "none";
        } else {
            let arrayWithBlock = document.getElementsByTagName("block");
            console.log(arrayWithBlock);
            for (element of arrayWithBlock) {
                element.style.display = "none";
            }
            button.nextElementSibling.style.display = "block";
            console.log(button.nextElementSibling);
            button.nextElementSibling.style.maxHeight = null;
        }
    });
}
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let invisible = document.createElement("button");
let invDiv = document.createElement("div");
invisible.innerText = "Click Me";
invDiv.appendChild(invisible);
document.body.appendChild(invDiv);
invisible.onclick = function () {
    invDiv.style.maxHeight = "0px";
    invDiv.style.overflow = "none";
    invDiv.style.overflow = "hidden";
}
//
//
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// -- взять массив пользователей
let usersWithAddress = [
                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
             ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
console.log(usersWithAddress.filter(item => !item.status));
// 2й - оставляет старше 29 лет включительно
console.log(usersWithAddress.filter(item => item.age >= 29));
// 3й - оставляет тех у кого город киев
console.log(usersWithAddress.filter(item => item.address.city === "Kyiv"));
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан