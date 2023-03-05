//Стоврити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let name = document.createElement("input");
name.type = "text";
document.body.append(name);
let surname = document.createElement("input");
surname.type = "text";
document.body.append(surname);
let age = document.createElement("input");
age.type = "number";
document.body.append(age);
let button = document.createElement("button");
button.innerText = "Create";
document.body.append(button);
button.onclick = function () {
    let user = {name: name.value, surname: surname.value, age: age.value};
    let div = document.createElement("div");
    //div.innerText = JSON.stringify(user); // можна так
    for (const userKey in user) {
        let keyDiv = document.createElement("div");
        keyDiv.innerText = `${userKey} : ${user[userKey]}`;
        div.append(keyDiv);
    } // так красивіше виводиться
    document.body.append(div);
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let div = document.createElement("div");
onload = function () {
    let counter = localStorage.getItem("counter") || -1;
    localStorage.setItem("counter", ++counter);
    div.innerText = localStorage.getItem("counter");
    document.body.append(div);
} // Скільки я намучився з цією задачею доки не догадався створювати counter у функції, кучу івентів перепробував, а розвязок виявився такий простий

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
onunload = function () {
    let sessionsArray =JSON.parse(localStorage.getItem("sessions")) || [];
    sessionsArray.push(new Date());
    localStorage.setItem("sessions", JSON.stringify(sessionsArray));
}; // розумію що трохи говнокоду, але так і не зрозумів до якого елементу використати addEventListener що використати onload або onunload
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
let array = [];
for (let i = 0; i < 100; i++) {
    array.push({id : i + 1});
}
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let endIndex = 0;
let image = document.createElement("div");
let prevButton = document.createElement("button");
prevButton.innerText = "prev";
let nextButton = document.createElement("button");
nextButton.innerText = "next";
function printTenElements(array, startIndex) {
    image.innerText = "";
    endIndex = startIndex + 10;
    prevButton.disabled = startIndex <= 0;
    nextButton.disabled = endIndex >= array.length;
    for (startIndex; startIndex < endIndex; startIndex++) {
        let divElement = document.createElement("div");
        divElement.append(JSON.stringify(array[startIndex]));
        image.append(divElement);
    }
}
printTenElements(array, 0);
document.body.append(image, prevButton, nextButton);
prevButton.onclick = function () {
    printTenElements(array, endIndex - 20);
}
nextButton.onclick = function () {
    printTenElements(array, endIndex);
}
//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// Це завдання я зробив у ДЗ 9