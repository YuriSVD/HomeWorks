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
    return firstNum > secondNum ? firstNum > thirdNum ? firstNum : thirdNum : secondNum > thirdNum ? secondNum : thirdNum;
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
function arrayWithRandomNumbers(array, countOfNum, limit) {
    for (let i = 0; i < countOfNum; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    return array;
}
console.log(arrayWithRandomNumbers([], 10, 100));
// - Функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array = arrayWithRandomNumbers([], 10, 100);
function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let buffer = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = buffer;
    }
    return array;
}
reverseArray(array);
// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
function printer(a, b) {
    if (!!!b) {
        console.log(a);
        return;
    }
    console.log(a + b);
}
printer("first");
// - створити функцію яка приймає два масиви та складає значення елементів з однаковими індексами та повертає новий результівний масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let firstArray = [1, 2, 3, 4];
let secondArray = [2, 3, 4, 5];
function sumOfArrays(firstArray, secondArray) {
    let sum = [];
    for (let i = 0; i < firstArray.length; i++) {
        sum[i] = firstArray[i] + secondArray[i];
    }
    return sum;
}
sumOfArrays(firstArray, secondArray);
// - Створити функцію яка приймає масив будь-яких об'єктів, та повертає масив ключів всіх об'єктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function keyOfObject(array) {
    let keys = [];
    let i = 0;
    for (let data of array) {
        for (let key in data) {
            keys[i] = key;
            i++;
        }
    }
    return keys;
}
let arrayWithObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(keyOfObject(arrayWithObjects));
// - Створити функцію яка приймає масив будь-яких об'єктів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function dataOfObject(array) {
    let keys = [];
    let i = 0;
    for (let data of array) {
        for (let key in data) {
            keys[i] = data[key];
            i++;
        }
    }
    return keys;
}
console.log(dataOfObject(arrayWithObjects));