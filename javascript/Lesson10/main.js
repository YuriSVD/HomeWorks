//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
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
button.innerText = "Push";
document.body.append(button);
button.onclick = function () {
    //let user = JSON.stringify({name: name.value, surname: surname.value, age: age.value});
    let user = `name : ${name.value}, surname : ${surname.value}, age : ${age.value}`;
    let div = document.createElement("div");
    div.append(user);
    document.body.append(div);
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let div =document.createElement("div");
let counter = 0;
div.innerText = counter;
document.body.append(div);
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів