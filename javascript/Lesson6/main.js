//- Знайти та вивести довижину настипних стрінгових значень
let a = "hello world", b = "lorem ipsum", c = "javascript is cool";
console.log(a.length);
console.log(b.length);
console.log(c.length);
//- Перевести до великого регістру наступні стрінгові значення
let upperCaseA = a.toUpperCase();
let upperCaseB = b.toUpperCase();
let upperCaseC = c.toUpperCase();
//- Перевести до нижнього регістру настипні стрінгові значення
let lowerCaseA = upperCaseA.toLowerCase();
let lowerCaseB = upperCaseB.toLowerCase();
let lowerCaseC = upperCaseC.toLowerCase();
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = " dirty string   ";
let startIndex;
let endIndex;
for (let i = 0; i < dirtyStr.length; i++) {
    if (dirtyStr.charAt(i) !== " ") {
        startIndex = i;
        for (i = dirtyStr.length - 1; i > startIndex; i--) {
            if (dirtyStr.charAt(i) !== " ") {
                endIndex = i + 1;
                break;
            }
        }
    }
}
let clearStr = dirtyStr.substring(startIndex, endIndex); // let clearStr = dirtyStr.trim() або так
//- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = "Ревуть воли як ясла повні";
console.log(stringToArray(str));

function stringToArray(str) {
    return str.split(" ");
}
//- є масив чисел [10,8,-7,55,987,-1011,0,1050, 0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.
let intArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(intArray);
for (let number of intArray) {
    console.log(typeof number);
    intArray = intArray.map(number => number.toString());
}
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,3, 21];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
let direction = "ascending";
let sortNums = (array, direction) => {
    if (direction === "ascending") {
        array.sort((a, b) => {
            return a - b;
        })
    } else if (direction === "descending") {
        array.sort((a, b) => {
          return b - a;
        })
    } else {
        return "Something wrong";
    }
}
sortNums(nums, direction);
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((firstItem, secondItem) =>
    secondItem.monthDuration - firstItem.monthDuration);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray.filter(value => value.monthDuration > 5);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesWithID = coursesAndDurationArray.map((value, index) =>
    ({id: index + 1, ...value}));
console.log(coursesWithID);
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//--написати пошук всіх об'єктів, в який в modules є sass
let coursesWithSass = coursesArray.filter(value => value.modules.find(course => course === "sass"));
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesWithDocker = coursesArray.filter(value => value.modules.find(course => course === "docker"));
//описати колоду карт (від 6 до туза без джокерів)
let deckOfCards = [];
deckOfCards.push({cardSuit: "spade", value: "6", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "7", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "8", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "9", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "10", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "jack", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "queen", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "king", color: "black"});
deckOfCards.push({cardSuit: "spade", value: "ace", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "6", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "7", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "8", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "9", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "10", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "jack", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "queen", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "king", color: "black"});
deckOfCards.push({cardSuit: "clubs", value: "ace", color: "black"});
deckOfCards.push({cardSuit: "heart", value: "6", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "7", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "8", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "9", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "10", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "jack", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "queen", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "king", color: "red"});
deckOfCards.push({cardSuit: "heart", value: "ace", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "6", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "7", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "8", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "9", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "10", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "jack", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "queen", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "king", color: "red"});
deckOfCards.push({cardSuit: "diamond", value: "ace", color: "red"});
//console.log(deckOfCards);
//  - знайти піковий туз
deckOfCards.find(item => item.value === "ace" && item.cardSuit === "spade" && item.color === "black");
//  - всі шістки
deckOfCards.filter(item => item.value === "6");
//  - всі червоні карти
deckOfCards.filter(item => item.color === "red");
//  - всі буби
deckOfCards.filter(item => item.cardSuit === "diamond");
//  - всі трефи від 9 та більше
deckOfCards.filter(item => (item.value === "9" || item.value.length > 1) && item.cardSuit === "clubs"); // Свида - ой, говнокод
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
deckOfCards.reduce((deck, card) => {
    if (card.cardSuit === "spade") {
        deck.spades.push(card);
    } else if (card.cardSuit === "diamond") {
        deck.diamonds.push(card);
    } else if (card.cardSuit === "heart") {
        deck.hearts.push(card);
    } else if (card.cardSuit === "clubs") {
        deck.clubs.push(card);
    }
    return deck;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
