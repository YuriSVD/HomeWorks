//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minValue = (a, b, c) => a < b ? a < c ? a : c : b < c ? b : c;
console.log(minValue(4, 9, -1));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxValue = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}
console.log(maxValue(4, 9, -1));
// - створити функцію яка повертає найбільше число з масиву
let intArray = [10, 8, 0, -7, 55, 0, 987, 0, -1011, 1050];
let biggestNumberOfArray = array => {
    let biggestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > biggestNumber) {
            biggestNumber = array[i];
        }
    }
    return biggestNumber;
}
biggestNumberOfArray(intArray);
// - створити функцію яка повертає найменьше число з масиву
let smallerNumberOfArray = array => {
    let biggestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < biggestNumber) {
            biggestNumber = array[i];
        }
    }
    return biggestNumber;
}
smallerNumberOfArray(intArray);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summeryOfNumbersOfArray = array => {
    let summary = 0;
    for (let data of array) {
        summary += data;
    }
    return summary;
}
summeryOfNumbersOfArray(intArray);
// - Дано натуральное число n. Выведите все числа от 1 до n.
let n = 10;
let printerForNumbers = counter => {
    for (let i = 0; i < counter; i++) {
        console.log(i + 1);
    }
}
printerForNumbers(n);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let a = 13;
let b = 34;
let printerForNumbersWithRange = (a, b) => {
    if (a < b) {
        for (a; a <= b; a++) {
            console.log(a);
        }
    } else if (a > b) {
        for (a; a >= b; a--) {
            console.log(a);
        }
    } else {
        console.log(a);
    }
}
printerForNumbersWithRange(a, b);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let swap = (array, index) => {
    let buffer = array[index]
    array[index] = array[index + 1];
    array[index + 1] = buffer;
    return array;
}
swap(intArray, 2);
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
let zeroToTheEnd = array => {
    let j = 0;
    for (let i = 0; i < array.length - j; i++) {
        if (!array[i]) {
            let swapStart = i;
            let swapEnd = array.length - 1 - j;
            for (swapStart; swapStart < swapEnd; swapStart++) {
                let buffer = array[swapStart];
                array[swapStart] = array[swapStart + 1];
                array[swapStart + 1] = buffer;
            }
            i = -1;
            j++;
        }
    }
    return array;
}
console.log(zeroToTheEnd([0, 0, 0, 0, 10, 8, 0, -7, 55, 0, 987, 0, -1011, 1050]));
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]