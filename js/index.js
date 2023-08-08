//task 1 - user userName : only even number of symbols
let userName = prompt("Введите ваше имя:");    
    if (userName.length % 2 === 0) {
      alert("Привет, " + userName + "! Ваше имя содержит четное количество букв.");
    } else if (userName.length === 0) {
      alert("Вы не ввели имя. Попробуйте еще раз.");
    
    } else {
      alert("Извините, ваше имя должно содержать четное количество букв. Попробуйте еще раз.");
    }

    //task 2 odd or even number 

    let inputNum = prompt("Введите число:");

// checking the validity of input
if (inputNum === null || inputNum.trim() === "" || typeof inputNum !== "number") {//cancel,no input, not a number
  alert("Пожалуйста, введите  число.");
} else {
  inputNum = +inputNum; 
  if (inputNum % 2 === 0) {
    alert("Число " + inputNum + " четное");
  } else {
    alert("Число " + inputNum + " нечетное");
  }
}

//task 3 basic calculator
let firstNumber = +prompt("Введите первое число:");
//checking the validity of input 1
if (isNaN(firstNumber)) {
  while (isNaN(firstNumber)) {
    firstNumber = +prompt("Пожалуйста, введите корректное первое число:");
  }
}

let operator = prompt("Введите оператор: +, -, *, /");
let plus = "+";
let minus = "-";
let multiply = "*";
let divide = "/";

let secondNumber = +prompt("Введите второе число:");
//checking the validity of input 2
if (isNaN(secondNumber)) {
  while (isNaN(secondNumber)) {
    secondNumber = +prompt("Пожалуйста, введите корректное второе число:");
  }
}

if (operator === plus) {
  alert(firstNumber + secondNumber);
} else if (operator === minus) {
  alert(firstNumber - secondNumber);
} else if (operator === multiply) {
  alert(firstNumber * secondNumber);
} else if (operator === divide) {
  if (secondNumber === 0) {
    alert("На ноль делить нельзя!");
  } else {
    alert(firstNumber / secondNumber);
  } 
} else {
  alert("Вы ввели некорректный оператор");
}

//task 4 month and season
let monthNumber;

do {
  monthNumber = +prompt("Введите номер месяца (от 1 до 12):");
} while (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber));//keeps running until a valid number is entered

let season;

if (monthNumber === 12 || monthNumber <= 2) {
  season = "Зима";
} else if (monthNumber >= 3 && monthNumber <= 5) {
  season = "Весна";
} else if (monthNumber >= 6 && monthNumber <= 8) {
  season = "Лето";
} else {
  season = "Осень";
}

alert("Сейчас " + season);
//task 5 club member 
const clubCapacity = 10;
let peopleInsideClub = +prompt("Сколько людей уже в клубе?");

let totalPeople = +prompt("Сколько людей хотят вступить в клуб?");

for (let i = 1; i <= totalPeople; i++) {
  const name = prompt("Введите имя:");
  const age = +prompt("Введите возраст:");
  const money = +prompt("Введите количество денег в кармане ($):");

  const remainingSeats = clubCapacity - peopleInsideClub;

  if (
    (name[0].toLowerCase() === "a" || name[0] === "А") &&
    age > 20 && age <= 40 &&
    money > 100 &&
    remainingSeats > 0
  ) {
    alert("Добро пожаловать в клуб, " + name + "!");
    peopleInsideClub++;//adding +1 to peopleInsideClub
  } else {
    alert("Извините, " + name + ", вы не можете войти в клуб.");
  }
}

alert("Количество людей, которые вошли в клуб: " + peopleInsideClub);



  
  
 
  