let intArray = [];
for (let i = 0; i < 10; i++) {
    intArray[i] = `${i + 1}`;
    console.log(intArray[i])
}
////////////////////////////////////////////////////////////
let firstBook = {title : "firstTitle", pageCount : 100, genre : "firstGenre"}
let secondBook = {title : "secondTitle", pageCount : 200, genre : "secondGenre"}
let thirdBook = {title : "thirdTitle", pageCount : 300, genre : "thirdGenre"}
////////////////////////////////////////////////////////////
let anotherFirstBook = {title : "first_title",
    pageCount : 100,
    genre : "firstGenre",
    authors : {name : "firstName", age : 30}}
let anotherSecondBook = {title : "second_title",
    pageCount : 200,
    genre : "secondGenre",
    authors : {name : "secondName", age : 40}}
let anotherThirdBook = {title : "third_title",
    pageCount : 300,
    genre : "thirdGenre",
    authors : {name : "thirdName", age : 50}}
////////////////////////////////////////////////////////////
let userArray = [user1 = {name : "name1", username : "username1", password : "password1"},
    user2 = {name : "name2", username : "username2", password : "password2"},
    user3 = {name : "name3", username : "username3", password : "password3"},
    user4 = {name : "name4", username : "username4", password : "password4"},
    user5 = {name : "name5", username : "username5", password : "password5"},
    user6 = {name : "name6", username : "username6", password : "password6"},
    user7 = {name : "name7", username : "username7", password : "password7"},
    user8 = {name : "name8", username : "username8", password : "password8"},
    user9 = {name : "name9", username : "username9", password : "password9"},
    user10 = {name : "name10", username : "username10", password : "password10"}];
for (let i = 0; i < userArray.length; i++) {
    console.log(userArray[i].password);
}
////////////////////////////////////////////////////////////
let a = Math.round(Math.random());
if (a !== 0) {
    console.log("Вірно")
} else {
    console.log("Не вірно")
}
////////////////////////////////////////////////////////////
let time = Math.round(Math.random() * 60);
if (time >= 0 && time < 15) {
    console.log("Перша частина години")
} else if (time >= 15 && time < 30) {
    console.log("Друга частина години")
} else if (time >= 30 && time < 45) {
    console.log("Третя частина години")
} else if (time >= 45 && time < 60) {
    console.log("Четверта частина години")
} else {
    console.log("Невідповідне число")
}
////////////////////////////////////////////////////////////
let day = Math.round((Math.random() * 30) + 1);
if (day > 0 && day <=10) {
    console.log("Перша декада місяця")
} else if (day > 10 && day <= 20) {
    console.log("Друга декада місяця")
} else if (day > 20 && day <= 31) {
    console.log("Третя декада місяця")
} else {
    console.log("Невідповідне число місяця")
}
////////////////////////////////////////////////////////////
let dayOfWeek = Math.round((Math.random() * 6) + 1);
switch (dayOfWeek) {
    case 1: console.log("Task for monday");
    break;
    case 2: console.log("Task for tuesday");
    break;
    case 3: console.log("Task for wednesday");
    break;
    case 4: console.log("Task for thursday");
    break;
    case 5: console.log("Task for friday");
    break;
    case 6: console.log("Task for Saturday");
    break;
    case 7: console.log("Task for Sunday");
    break;
    default: console.log("Wrong number of week");
}
////////////////////////////////////////////////////////////
let firstInt = prompt("Enter first number");
let secondInt = prompt("Enter second number");
//console.log(Math.max(firstInt, secondInt));
////////////////////////////////////////////////////////////
if (firstInt > secondInt) {
    console.log(firstInt)
} else if (secondInt > firstInt) {
    console.log(secondInt)
} else {
    console.log("Числа рівні")
}
////////////////////////////////////////////////////////////
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(coursesAndDurationArray[i].title + " Cупер")
    }
}