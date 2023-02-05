// --створити масив з:
// - з 5 числових значень
let intArray = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let strArray = ["one", "two", "three", "four", "five"];
// - з 5 значень стрічкового, числового та булевого типу
let anotherArray = [1, true, "hello", false, "world"];
for (let i = 0; i < anotherArray.length; i++) {
    console.log(anotherArray[i]);
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = "hello";
emptyArray[1] = 2;
emptyArray[2] = true;
emptyArray[3] = "world";
emptyArray[4] = false;
for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
}
// - є масив:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
// 2. перебрати його циклом for
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < array.length) {
    if (i % 2) {
        console.log(array[i]);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < array.length; i++) {
    if (i % 2) {
        console.log(array[i]);
    }
}
i = 0;
// 5. перебрати циклом while та вивести  числа тільки парні  значення
while (i < array.length) {
    if (!(array[i] % 2)) {
        console.log(array[i]);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < array.length; i++) {
    if (!(array[i] % 2)) {
        console.log(array[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < array.length; i++) {
    if (!(array[i] % 3)) { // array[i] % 3 === 0
        array[i] = "okten";
    }
}
// 8. вивести масив в зворотньому порядку.
for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
i = array.length - 1;
while (i > -1) {
    console.log(array[i]);
    i--;
}
// 2. перебрати його циклом for
for (i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = array.length - 1;
while (i >= 0) {
    if (i % 2) { // if (i % 2 !== 0) {
        console.log(array[i]);
    }
    i--;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = array.length -1; i >= 0; i--) {
    if (i % 2) {
        console.log(array[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = array.length - 1;
while (i >= 0) {
    if (!(array[i] % 2)) {
        console.log(array[i]);
    }
    i--;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = array.length - 1; i >= 0; i--) {
    if (!(array[i] % 2)) {
        console.log(array[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = array.length - 1; i >= 0; i--) {
    if (!(array[i] % 3)) {
        array[i] = "okten";
    }
}
//створити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{name : "book_name", pages : 100, authors : ["Bill", "John"], genre: ["1", "2", "3"]},
            {name : "something_book_name", pages : 500, authors : ["Mike"], genre: ["1"]},
            {name: "another_book_name", pages: 340, authors: ["Flora", "Fauna"], genre: ["1", "2"]}];
//-знайти наібльшу книжку.
//- знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
let biggestCountGenres = books[0];
let lagerBookName = books[0];
for (i = 1; i < books.length; i++) {
    if (books[i].genre.length > biggestCountGenres.genre.length) {
        biggestCountGenres = books[i];
    }
    if (books[i].pages > lagerBookName.pages) {
        lagerBookName = books[i];
    }
    if (books[i].authors.length === 2) {
        console.log("Book " + books[i].name + " wrote by two authors");
    }
    if (books[i].authors.length === 1) {
        console.log("Book " + books[i].name + " wrote by one author");
    }
}
console.log(biggestCountGenres);
console.log(lagerBookName);