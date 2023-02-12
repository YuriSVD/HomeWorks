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
let clearStr = dirtyStr.substring(startIndex, endIndex);
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
//  8, -7, 10, 55, 987, -1011, 0, 1050, 0
//   -7, 8, 10, 55, 987, -1011, 0, 1050, 0
//   -7, 8, 10, 55, , -1011, 0, 987 1050, 0
//   -7, 8, 10, -1011, 55, 0, 987 1050, 0
console.log(intArray);
let stingArray = [];
for (let number of intArray) {
    strArray = intArray.map(number => number.toString());
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
        array.sort((a, b )=> {
          return b - a;
        })
    } else {
        console.log("Something wrong");
    }
}
/*let sortNums = (array, direction) => {
    if (direction === "ascending") {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let buffer = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buffer;
                i = -1;
            }
        }
    } else if (direction === "descending") {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < array[i + 1]) {
                let buffer = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buffer;
                i = -1;
            }
        }
    } else {
        console.log("Wrong type of direction");
    }
    return array;
}*/
sortNums(nums, direction);
console.log(nums);
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
coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
})
console.log(coursesAndDurationArray);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesWithID = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value}
})
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
console.log(coursesWithSass);
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesWithDocker = coursesArray.filter(value => value.modules.find(course => course === "docker"));
console.log(coursesWithDocker);