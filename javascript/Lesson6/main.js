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
let clearStr = dirtyStr.substring(startIndex, endIndex); // dirtyStr.trim() або так
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