

// 3.Дан следующий код:

// let age = 10;

// if (age < 10) {
//     console.log('hi!');
// } else if (age < 20) {
//     console.log('hello!');
// } else {
//     console.log('good day!');
// }
// Необходимо переписать этот код используя тернарный оператор


// let age = 10;
// let greeting = age < 10 ? 'hi!' : age < 20 ? 'hello!' : 'good day!';
// console.log(greeting);


let a = prompt("Введите первый множитель:");
let b = prompt("Введите второй множитель:");
let userAnswer = prompt(`Сколько будет ${a} * ${b}?`);

// проверяем, что все три введенных значения являются числами
if (isNaN(a) || isNaN(b) || isNaN(userAnswer)) {
  console.log("Ошибка! Введите числа.");
} else {
  // вычисляем правильный ответ
  const correctAnswer = a * b;
  // проверяем ответ пользователя и выводим соответствующее сообщение
  if (userAnswer == correctAnswer) {
    console.log("Правильно!");
  } else {
    console.log(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }
}