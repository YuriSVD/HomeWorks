//- створити блок,
let element = document.createElement("div");
element.innerText = "some text";
// - додати йому класи wrap, collapse, alpha, beta
element.classList.add("wrap", "collapse", "alpha", "beta");
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
element.style.background = "silver";
element.style.color = "blue";
element.style.fontSize = "20px";
// - додати цей блок в body.
document.body.appendChild(element);
// - клонувати його повністю, та додати клон в body.
let cloneElement = element.cloneNode(true);
document.body.appendChild(cloneElement);
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let array = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement("ul");
for (let data of array) {
    let li = document.createElement("li");
    li.innerText = data;
    ul.appendChild(li);
}
document.body.appendChild(ul);
// - Є масив
let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let data of coursesAndDurationArray) {
    let div = document.createElement("div");
    for (const dataKey in data) {
        let dataDiv = document.createElement("div");
        dataDiv.append(`${dataKey} : ${data[dataKey]}`);
        div.appendChild(dataDiv);
    }
    document.body.appendChild(div);
}
// =========================
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (let data of coursesAndDurationArray) {
    let div = document.createElement("div");
    div.classList.add("item");
    let h1 = document.createElement("h1");
    h1.classList.add("heading");
    let p = document.createElement("p");
    p.classList.add("description");
    h1.append(data.title);
    p.append(data.monthDuration);
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpsonMember of simpsons) {
    let simpson = document.createElement("div");
    simpson.classList.add("member");
    let hading = document.createElement("h2");
    hading.innerText = `${simpsonMember.name} ${simpsonMember.surname}`;
    let description = document.createElement("p");
    description.innerText = simpsonMember.info;
    description.style.textAlign = "justify";
    let image = document.createElement("img");
    image.src = simpsonMember.photo;
    image.style.height = "200px";
    simpson.append(hading, image, description);
    document.body.append(simpson); // роки не знаю де додати
}

// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
for (const course of coursesArray) {
    let div = document.createElement("div");
    for (const courseItem in course) {
        let item = course[courseItem];
        let divItem = document.createElement("div");
        if (Array.isArray(item)) {
            let ul = document.createElement("ul");
            for (const itemKey of item) {
                let li = document.createElement("li");
                li.innerText = itemKey;
                ul.appendChild(li);
            }
            divItem.appendChild(ul);
        }
        else {
            divItem.innerText = item;
        }
        div.appendChild(divItem);
    }
    document.body.append(div);
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let someElement = document.createElement("h2");
someElement.id = "text";
someElement.innerText = "I am visible";
document.body.appendChild(someElement);
let button = document.createElement("button");
button.innerText = "Press me";
document.body.appendChild(button);
button.onclick = function () {
    let target = document.getElementById("text");
    target.style.color = "white";
}
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let checking = document.createElement("div");
let input = document.createElement("input");
input.type = "number";
checking.appendChild(input);
let buttonSend = document.createElement("button");
buttonSend.innerText = "Send";
checking.appendChild(buttonSend);
document.body.appendChild(checking);
buttonSend.onclick = function () {
    if (input.value < 18) {
        alert("This content not for you, baby");
    }
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
let div = document.createElement("div");
let countOfStrings = document.createElement("input");
countOfStrings.type = "number";
div.appendChild(countOfStrings);
let countOfCells = document.createElement("input");
countOfCells.type = "number";
div.appendChild(countOfCells);
let dataOfCell = document.createElement("input");
dataOfCell.type = "text";
div.appendChild(dataOfCell);
let createButton = document.createElement("button");
createButton.innerText = "Create";
div.appendChild(createButton);
document.body.appendChild(div);
createButton.onclick = function () {
    let table = document.createElement("table");
    table.style.border = "2px solid";
    for (let i = 0; i < countOfStrings.value; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < countOfCells.value; j++) {
            let th = document.createElement("th");
            th.style.border = "1px solid";
            th.innerText = dataOfCell.value;
            th.style.fontSize = "20px";
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)