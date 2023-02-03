//- Знайти та вивести довижину настипних стрінгових значень
let a = "hello world", b = "lorem ipsum", c = "javascript is cool";
console.log(a.length);
console.log(b.length);
console.log(c.length);
//- Перевести до великого регістру наступні стрінгові значення
a = a.toUpperCase();
b = b.toUpperCase();
c = c.toUpperCase();
console.log(a);
console.log(b);
console.log(c);
//- Перевести до нижнього регістру настипні стрінгові значення
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = " dirty string   ";
let startIndex;
let endIndex;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
        startIndex = i;
        for (i = str.length - 1; i > startIndex; i--) {
            if (str.charAt(i) !== " ") {
                endIndex = i + 1;
                break;
            }
        }
    }
}
let clearString = str.substring(startIndex, endIndex);
console.log(clearString);
console.log(str.length);
console.log(clearString.length);
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let panasMyrnyi = "Ревуть воли як ясла повні";
console.log(stringToArray(panasMyrnyi));
function stringToArray(str) {
    return str.split(" ");
}
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.
/*
let intArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(intArray);
for (let i = 0; i < intArray.length; i++) {
}*/
