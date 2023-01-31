/*let firstArray = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        firstArray[i] = i + 2;
    } else {
        firstArray[i] = i + 1;
    }
}*/
////////////////////////////////
/*let secondArray = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        secondArray[i] = i + 1;
    } else {
        secondArray[i] = i;
    }
}
console.log("random");*/
//////////////////////////////////
/*let randomArray = [];
for (let i = 0; i < 20; i++) {
    randomArray[i] = Math.round((Math.random() * 100) + 1);
}*/
//////////////////////////////////
/*console.log("random");
let anotherArray = [];
for (let i = 0; i < 20; i++) {
    randomArray[i] = Math.round((Math.random() * 732) + 8);
    console.log(randomArray[i]);
}*/
//////////////////////////////////
let array = [];
for (let i = 0; i < 100; i++) {
    array[i] = i + 1;
}
let copyArray = [];
let indexOfCopyArray = 0;
for (let i = 0; i < array.length; i++) {
    if ((i + 1) % 3 === 0 && array[i] % 2 === 0) {
        console.log(array[i]);
        copyArray[indexOfCopyArray] = array[i];
        indexOfCopyArray++;
    }
}
console.log("exampleArray");
let exampleArray = [1, 2, 3, 5, 9, 56, 8, 67];
for (let i = 1; i < exampleArray.length; i++) {
    if (exampleArray[i] % 2 === 0) {
        console.log(exampleArray[i - 1]);
    }
}
console.log("prizeArray");
let prizeArray = [100, 250, 50, 168, 120, 345, 188];
let totalPrize = 0;
for (let i = 0; i < prizeArray.length; i++) {
    totalPrize = totalPrize + prizeArray[i];
}
console.log(`Загальна сума покупок: ${totalPrize}`);
console.log(`Середня вартість товару у чеку: ${(totalPrize / prizeArray.length).toFixed(2)}`)