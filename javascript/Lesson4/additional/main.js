//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let a = 4;
let b = 9;
let c = -1;
console.log(minNumber(a, b, c));
function minNumber(firstNum, secondNum, thirdNum) {
    if (firstNum < secondNum && firstNum < thirdNum) {
        return firstNum;
    } else if (secondNum < firstNum && secondNum < thirdNum) {
        return secondNum;
    } else {
        return thirdNum;
    }
}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log(maxNumber(a, b, c));
function maxNumber(firstNum, secondNum, thirdNum) {
    let maxNumber = firstNum;
    if (secondNum > maxNumber) {
        maxNumber = secondNum;
    }
    if (thirdNum > maxNumber) {
        maxNumber = thirdNum;
    }
    return maxNumber;
}
// - створити функцію яка повертає найбільше число з масиву
let intArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(maxNumFromArray(intArray));
function maxNumFromArray(array) {
    let maxNum = array[0];
    for (let i = 1; i < intArray.length; i++) {
        const number = intArray[i];
        if (number > maxNum) {
            maxNum = number;
        }
    }
    return maxNum;
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(averageNum(intArray));
function averageNum(array) {
    let summery = 0;
    for (const number of array) {
        summery += number;
    }
    return summery / array.length;
}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log(f());
function f() {
    let countOfArg = arguments.length;
    if (countOfArg === 0) {
        return "I dont have numbers for working";
    }
    let minNum = arguments[0];
    let maxNum = arguments[0];
    for (let i = 1; i < countOfArg; i++) {
        let argument = arguments[i];
        if (argument > maxNum) {
            maxNum = argument;
        }
        if (argument < minNum) {
            minNum = argument;
        }
    }
    console.log(maxNum);
    return minNum;
}
// - створити функцію яка заповнює масив рандомними числами

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]