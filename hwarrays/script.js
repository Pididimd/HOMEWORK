//Код будет закоментировае Зеленым цветом. 
//Todo: Данный цвет это условия задачи.
//!! Красный ипользован для обьяснения решения задачи.
//?? Синий как дополнительный вариант.


// Todo: Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const slicedArr = arr.slice(2, 5);
// console.log(slicedArr); // ["David", "Lambert", "Eddie"]

//Todo: Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.unshift(arr.splice(arr.indexOf("Janett"), 1)[0], arr.splice(arr.indexOf("Franz"), 1)[0]);
// console.log(arr);
//!! В этом случае мы используем метод splice() для удаления элементов "Janett" и "Franz" из массива, а затем используем метод unshift() для добавления этих элементов в начало массива. Обратите внимание, что метод splice() возвращает массив удаленных элементов, поэтому мы используем [0], чтобы получить первый (и единственный) элемент из этого массива и передать его в метод unshift().

//?? Используем деструктуризацию 

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// Деструктурируем исходный массив, чтобы получить элементы "Janett" и "Franz"
// const [janett, franz, ...rest] = arr;

// Собираем новый массив, начиная с элементов "Janett" и "Franz"
// const newArr = [janett, franz, ...rest];

// console.log(newArr);

//!! В этом примере мы используем деструктуризацию массива, чтобы получить первые два элемента "Janett" и "Franz", а затем используем оператор spread (...) для сборки нового массива, начиная с этих элементов.

//Todo: Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

//!! Используем метод map и replace. Map что бы перебрать елементы масива и создать новый.Затем использовать Replace что бы заменить элементы.

// const newArr = arr.map((item) => {
//   if (item === "Eddie") {
//     return "Oleg";
//   } else if (item === "Janett") {
//     return "Valerchik";
//   } else {
//     return item;
//   }
// });

// console.log(newArr);


//Todo: Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan"

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.splice(0, 4, "Mitrofan");

// console.log(arr); 

//!! Используем методы: Reverse и Splice.
//!! Подозреваю что есть ошибка!!!

//Todo: Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const firstFour = arr.slice(0, 4).reverse();
// arr.fill("Mitrofan", 0, 4);
// console.log(arr); 

//!! Тут мы используем такие методы как slice,reverse и fill. С помошью методом slice копируем первые 4 элемента, затем используем метод reverse чтобы перевернуть элементы. После мы используем fill что бы заменить первые 4 элемента.

//Todo: Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arr2 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];
// const startIndex = arr2.indexOf("Aristarkh");
// const selectedArr = arr2.slice(startIndex);
// const resultArr = arr.concat(selectedArr);
// console.log(resultArr);

//!! Используем матоды : indexof,slice,concat: Через indexof мы находим элемент Aristarkh. slice - мы создаем новый масив (selectedArr) что содержит все элементы второго масива начиная с Aristarkh. concat - Используем что бы объеденить масив arr с selectedArr что бы получить масив с результатом resultArr который содержит все нами нужные элементы.

//Todo: Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:
// prompt() ===>>> 'машину'
// ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и любые другие


// let str = 'Мама мыла раму';
// let newWord = prompt('Введите слово для замены');
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'раму') {
//     words[i] = newWord;
//     break;
//   }
// }
// str = words.join(' ');
// console.log(str);

//!!Использовать функцию prompt() для получения нового слова от пользователя.Использован метод split() для разделения исходной строки на массив слов.Использован метод indexOf() для поиска индекса слова "раму" в массиве.Использован метод splice() для замены слова "раму" на новое слово, полученное от пользователя. Использован метод join() для объединения массива слов обратно в строку.






