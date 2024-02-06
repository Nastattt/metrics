// let elem = document.querySelector('.example')

// console.log(elem.offsetTop)
// console.log(elem.offsetLeft)
// console.log(elem.clientTop)
// console.log(elem.offsetParant)
// console.log(elem.offsetWidth-elem.clientWidth-elem.clientLeft*2)
// elem.style.height = elem.scrollHeight+'px'
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)
// console.log(window.pageXOffset)
// console.log(window.pageXOffset)
// console.log(window.screenX)
// console.log(window.screenY)
// elem.scrollTo(0,50)
// elem.scrollBy(0,100)
// console.log()
// дз

// Дан элемент #elem. Добавьте ему класс www.
// let elem1 = document.getElementById('elem');
// elem1.classList.add('www');

// // Дан элемент #elem. Удалите у него класс www.
// let elem2 = document.getElementById('elem');
// elem2.classList.remove('www');

// // Дан элемент #elem. Проверьте наличие у него класса www.
// let elem3 = document.getElementById('elem');
// let hasClassWWW = elem3.classList.contains('www');
// console.log("Есть ли класс www у элемента:", hasClassWWW);

// // Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
// let elem4 = document.getElementById('elem');
// elem4.classList.toggle('www');

// // Дан элемент #elem. Узнайте количество его классов.
// let elem5 = document.getElementById('elem');
// let numOfClasses = elem5.classList.length;
// console.log("Количество классов у элемента:", numOfClasses);

// // Дан элемент #elem. Выведите последовательно алертом его классы.
// let elem6 = document.getElementById('elem');
// elem6.classList.forEach(className => alert(className));

// // Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
// let elem = document.getElementById('elem');
// elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid black;';

// Дан элемент #elem. По клику на него выведите название его тега.
// let elem1 = document.getElementById('elem');
// elem1.addEventListener('click', function() {
//     alert(elem1.tagName);
// });

// Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
// let elem2 = document.getElementById('elem');
// elem2.addEventListener('click', function() {
//     alert(elem2.tagName.toLowerCase());
// });


// let elements = document.querySelectorAll('.www');
// elements.forEach(function(elem) {
//     let tagName = elem.tagName.toLowerCase();
//     elem.textContent += ' ' + tagName;
//     console.log(elem);
// });

// Дан ol. Вставьте ему в конец li с текстом 'пункт'.
// let ol = document.querySelector('ol');
// let li = document.createElement('li');
// li.textContent = 'пункт';
// ol.appendChild(li);

// // Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let ul = document.querySelector('ul');
// let array = ['элемент1', 'элемент2', 'элемент3'];

// array.forEach(function(item) {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// // });

// // Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// // Дан элемент #elem. Вставьте после него span с текстом '!!!'.
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');

// // Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

// // Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');

 // Задача 1
 function removeChildElement() {
    let parent = document.getElementById('parent');
    let child = document.getElementById('child');
    parent.removeChild(child);
}

// Задача 2
function removeLastChild() {
    let list = document.getElementById('list');
    let lastChild = list.lastElementChild;
    list.removeChild(lastChild);
}

// Задача 3
function removeMe() {
    let element = document.getElementById('removeMe');
    element.parentNode.removeChild(element);
}

// Задача 4
function removeListItem(item) {
    let list = document.getElementById('list2');
    list.removeChild(item);
}

// Задача 5
function cloneInput() {
    let input = document.getElementById('input');
    let clonedInput = input.cloneNode(true);
    input.parentNode.appendChild(clonedInput);
}