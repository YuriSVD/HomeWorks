// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let array = [];
    let endIndex = n;
    for (let startIndex = 0; startIndex < str.length; startIndex += n) {
        array.push(str.substring(startIndex, endIndex));
        endIndex += n;
    }
    return array;
}
document.writeln(cutString("synchrophasotron", 4));
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => str.split(" ").find(value => value.length === length);
let str = "Каждый охотник желает знать";
document.writeln(delete_characters(str, 7));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
let insert_dash = str => str.split(" ").join("-").toUpperCase(); //Свида - костиль? Не подобається, що потрібно переводити стрінгу у масив а потім знову у стрінгу
str = "HTML JavaScript PHP";
insert_dash(str);
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
str = "something";
let upperCaseForFirstSymbol = str => str[0].toUpperCase() + str.substring(1, str.length); //Свида - костиль?
console.log(upperCaseForFirstSymbol(str));
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let cleanName = name => {
    let separator;
    for (let symbol of name) {
        if (!((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z"))) { //Свида - шукав щось типу isAlphabetic як у Java, не знайшов тому так
            separator = symbol;
            break;
        }
    }
    let array = name.split(separator);
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            array.splice(i, 1);
            i--;
        }
    }
    return array.join(" ");
    //Свида - альтернативний метод, який не сподобався, простий як на мене, хоча свою функцію робе
    /*let deleteSymbol;
    if (name.includes("..")) {
        deleteSymbol = "..";
    } else if (name.includes("---")) {
        deleteSymbol = "---";
    } else if (name.includes("__")) {
        deleteSymbol = "__";
    }
    let array = name.split(deleteSymbol);
    return array.join(" ");*/
}
let name = cleanName(n2);
console.log(name);
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArray = number => {
    let randomArr = [];
    for (let i = 0; i < number; i++) {
        randomArr.push(Math.round(Math.random() * 100));
    }
    return randomArr;
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let intArray = randomArray(10);
console.log(intArray);
console.log(intArray.sort((firstInt, secondInt) => firstInt - secondInt));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(intArray.filter(number => !(number % 2) && number !== 0));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = string => string.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
console.log(capitalize("каждый охотник желает знать где сидит фазан"));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// Свида - Можливо, не правильно зрозумів умову
let emailValidator = email => {
    if (!(email.includes("@")) || email.charAt(0) === "@" ||
        email.substring(email.indexOf("@") + 1, email.indexOf(".")).length < 2) {
        return "Not valid email"; //Свида - можна false, IDEA допоможе переробити умову
    }
    return "Correct email"; //Свида - а тут true
}
console.log(emailValidator("someeMAIL@i.ua"));
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
coursesArray.sort((firstItem, secondItem) => secondItem.modules.length - firstItem.modules.length);
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symbol = "о";
str = "Астрономия это наука о небесных объектах";
let count = (string, searchSymbol) => {
    let countOfSymbol = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === searchSymbol) {
            countOfSymbol++;
        }
    }
    return countOfSymbol;
}
document.writeln(count(str, symbol)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let cutterString = (str, n) => str.split(" ").slice(0, n).join(" ");
str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutterString(str, 5)); // 'Сила тяжести приложена к центру'
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
//створити масив книжок (назва, кількість сторінок, автори , жанри).
let booksArray = [];
booksArray.push({name: "book_name", pages: 100, authors: ["Bill", "John"], genre: ["1", "2", "3"]});
booksArray.push({name: "something_book_name", pages: 500, authors: ["Mike"], genre: ["1"]});
booksArray.push({name: "another_book_name", pages: 340, authors: ["Flora", "Fauna"], genre: ["1", "2"]});
//-знайти наібльшу книжку.
booksArray.reduce((accumulator, value) => accumulator.pages > value.pages ? accumulator : value);
//- знайти книжку/ки з найбільшою кількістю жанрів
let biggestGenresBook = booksArray.reduce((acc, value) => acc.genre.length > value.genre.length ? acc : value);
booksArray.filter(book => book.genre.length === biggestGenresBook.genre.length);
// - знайти книжку/ки з найдовшою назвою
booksArray.filter(book => book.name.length === booksArray.reduce((acc, value) =>
    acc.name.length > value.name.length ? acc : value).name.length); // Свида - можна і так, але мені здається, що важко читається такий код
// - знайти книжку/ки які писали 2 автори
booksArray.filter(book => book.authors.length === 2);
// - знайти книжку/ки які писав 1 автор
booksArray.filter(book => book.authors.length === 1);
// - вісортувати книжки по кількості сторінок по зростанню
booksArray.sort((firstBook, secondBook) => firstBook.pages - secondBook.pages);