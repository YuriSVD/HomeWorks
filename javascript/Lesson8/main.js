//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArray = [];
usersArray.push(new User(8, "Steven", "Gerrard", "s.gerrard@gmail.com", "45678"),
    new User(6, "Tiago", "Alcantara", "t.alcantara@gmail.com", "87652"),
    new User(10, "Diego", "Maradona", "d.maradona@gmail.com", "92168"),
    new User(7, "George", "Best", "g.best@gmail.com", "63845"),
    new User(9, "Gert", "Muller", "g.muller@gmail.com", "12756"),
    new User(3, "Paolo", "Maldini", "p.maldini@gmail.com", "87123"),
    new User(4, "Patric", "Viera", "p.viera@gmail.com", "98381"),
    new User(2, "Dayot", "Upamecano", "d.upamecano@gmail.com", "74291"),
    new User(5, "Zinedine", "Zidane", "z.zidane@gmail.com", "84726"),
    new User(1, "Oliver", "Kahn", "o.kahn@gmail.com", "48172"));
console.log(usersArray);
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
console.log(usersArray.filter(value => !(value.id % 2)));
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usersArray.sort((a, b) => a.id - b.id));
// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientsArray = [];
clientsArray.push(new Client(6, "LeBron", "James", "l.james@gmail.com", "56714", [1, 2, 3, 4, 5, 6]),
    new Client(35, "Kevin", "Durant", "k.durant@gmail.com", "94827", [1, 2]),
    new Client(34, "Jannis", "Antetokounmpo", "j.antetokounmpo@gmail.com", "81742", [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    new Client(15, "Nicola", "Jokic", "n.jokic@gmail.com", "72095", [1, 2, 3, 4, 5, 6, 7, 8]),
    new Client(12, "Ja", "Morant", "j.morant@gmail.com", "92318", [1, 2, 3, 4, 5]),
    new Client(0, "Jason", "Tatum", "j.tatum@gmail.com", "51893", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Client(77, "Luka", "Doncic", "l.doncic@gmail.com", "18253", [1, 2, 3, 4, 5, 6, 7]),
    new Client(30, "Steph", "Curry", "s.curry@gmail.com", "17452", [1, 2, 3, 4]),
    new Client(1, "James", "Harden", "l.doncic@gmail.com", "16823", [1]),
    new Client(3, "Chris", "Paul", "c.paul@gmail.com", "10645", [1, 2, 3]));
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function PontiacCar(model, manufacturer, year, speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} км на годину`);
    }
    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== "function") {
                console.log(`${carKey} : ${this[carKey]}`);
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let pontiac = new PontiacCar("GTO", "Pontiac", 1964, 196, 6.4);
console.log(pontiac);
pontiac.drive();
pontiac.info();
pontiac.changeYear(2004);
pontiac.increaseMaxSpeed(257);
pontiac.addDriver({name: "Yuri", surname: "Svyda", year: 33, licence: "B"});
console.log(pontiac);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class FordCar {
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} км на годину`);
    }
    info() {
        for (const carKey in this) {
            console.log(`${carKey} : ${this[carKey]}`);
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let ford = new FordCar("Mustang", "Ford", 1967, 204, 7.0);
console.log(ford);
ford.drive();
ford.info();
ford.increaseMaxSpeed(264);
ford.changeYear(2015);
ford.addDriver({name: "Yuri", surname: "Svyda", year: 33, licence: "B"})
console.log(ford);
// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
}
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince("Prince", 26, 37);
let cinderellaArray = [new Cinderella("Anna", 23, 38),
    new Cinderella("Katya", 21, 39),
    new Cinderella("Vica", 28, 36.5),
    new Cinderella("Tania", 29, 37.5),
    new Cinderella("Yulia", 24, 38.5),
    new Cinderella("Sveta", 22, 36),
    new Cinderella("Dasha", 26, 37),
    new Cinderella("Natasha", 30, 39.5),
    new Cinderella("Alina", 25, 35.5),
    new Cinderella("Lesia", 27, 35)];
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cinderella of cinderellaArray) {
    if (cinderella.footSize === prince.foundShoe) {
        console.log(cinderella.name);
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellaArray.find(value => value.footSize === prince.foundShoe));
