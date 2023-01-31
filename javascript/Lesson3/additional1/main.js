let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
i = 0;
while (i < array.length) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
    i++;
}
for (i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}
i = 0;
while (i < array.length) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
    i++;
}
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}
for (i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = "okten";
    }
}
for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
let books = [{name : "name", pages : 100, authors : ["Bill", "John"], genre: ["1", "2", "3"]},
            {name : "something_name", pages : 500, authors : ["Mike"], genre: ["1"]},
            {name: "another_book", pages: 340, authors: ["Flora", "Fauna"], genre: ["1", "2"]}];
let biggestCountGenres = books[0].genre.length;
let lagerBookName = books[0].name;
for (i = 1; i < books.length; i++) {
    if (books[i].genre.length > biggestCountGenres) {
        biggestCountGenres = books[i].genre.length;
    }
    if (books[i].name.length > lagerBookName.length) {
        lagerBookName = books[i].name;
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