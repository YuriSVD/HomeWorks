// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
function explorer(element) {
    console.log(element);
    if (element.children.length !== 0) {
        for (let child of element.children) {
            explorer(child);
        }
    }
}
explorer(document.body);