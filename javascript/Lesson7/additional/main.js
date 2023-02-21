//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
        this.company = company;
    }
}

let newUser = new User(1,
    "Leanne Graham",
    "Bret",
    "Sincere@april.biz",
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {lat: "-37.3159", lng: "81.1496"}
    },
    "1-770-736-8031 x56442",
    "hildegard.org",
    {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    });
console.log(newUser);
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

let a = new Tag("a", "Тег a является одним из важных элементов HTML и предназначен для создания ссылок.",
    [{titleOfAttr: "accesskey", actionOfAttr: "Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки буквой или цифрой."},
        {titleOfAttr: "coords", actionOfAttr: "Атрибут coords применяется к ссылкам, которые располагаются внутри контейнера object."},
        {titleOfAttr: "download", actionOfAttr: "При наличии атрибута download браузер не переходит по ссылке, а предложит скачать документ, указанный в адресе ссылки."}]);
let div = new Tag("div", "Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
    [{titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега div."},
        {titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."}]);
let h1 = new Tag("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.",
    [{titleOfAttr: "align", actionOfAttr: "Определяет выравнивание заголовка."}]);
let span = new Tag("span", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.",
    [{titleOfAttr: "align", actionOfAttr: "Определяет выравнивание заголовка."}]);
let input = new Tag("input", "Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
    [{titleOfAttr: "accept", actionOfAttr: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
        {titleOfAttr: "accesskey", actionOfAttr: "Переход к элементу с помощью комбинации клавиш."},
        {titleOfAttr: "align", actionOfAttr: "Определяет выравнивание изображения."}]);
let form = new Tag("form", "Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.",
    [{titleOfAttr: "accept-charset", actionOfAttr: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
        {titleOfAttr: "action", actionOfAttr: "Адрес программы или документа, который обрабатывает данные формы."},
        {titleOfAttr: "autocomplete", actionOfAttr: "Включает автозаполнение полей формы."}]);
let option = new Tag("option", "Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.",
    [{titleOfAttr: "disabled", actionOfAttr: "Заблокировать для доступа элемент списка."},
        {titleOfAttr: "label", actionOfAttr: "Указание метки пункта списка."},
        {titleOfAttr: "selected", actionOfAttr: "Заранее устанавливает определенный пункт списка выделенным."}]);
let select = new Tag("select", "Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.",
    [{titleOfAttr: "accesskey", actionOfAttr: "Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
        {titleOfAttr: "autofocus", actionOfAttr: "Устанавливает, что список получает фокус после загрузки страницы."},
        {titleOfAttr: "disabled", actionOfAttr: "Блокирует доступ и изменение элемента."}]);
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }