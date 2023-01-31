let a = "hello",
    b = "owu",
    c = "com",
    d =  "ua",
    e = 1,
    f = 10,
    g = -999,
    h = 123,
    i = 3.14,
    j = 2.7,
    k = 16,
    isTrue = true,
    isFalse = false;

array = [a, b, c, d, e, f, g, h, i, j, k, isTrue, isFalse];

for (let z = 0; z < array.length; z++) {
    console.log(array[z])
}

let firstName = "Юрій";
let middleName = "Юрійович";
let lastName = "Свида";
let person = firstName + " " + middleName + " " + lastName;
console.log(person);

let l = 100;
let m = "100";
let n = true;
console.log(typeof l);
console.log(typeof m);
console.log(typeof n);
firstName = prompt("Enter your first name");
middleName = prompt("Enter your middle name");
lastName = prompt("Enter your last name");
alert(`Your full name: ${firstName} ${middleName} ${lastName}`);
console.log(`${firstName} ${middleName} ${lastName}`);