const num = 5;

if (num > 0) {
  console.log('Положительное число');
} else if (num < 0) {
  console.log('Отрицательное число');
} else {
  console.log('Ноль');
}

const number = 7;

if (number % 2 === 0) {
  console.log('Чётное число');
} else {
  console.log('Нечётное число');
}

const age = 17;

if (age >= 18) {
  console.log('Вы можете получить права');
} else {
  console.log('Вы не можете получить права');
}

const timeOfTheDay = 14;

if (timeOfTheDay < 12) {
  console.log('Morning');
} else if (timeOfTheDay >= 12 && timeOfTheDay < 18) {
  console.log('Day');
} else {
  console.log('Evening');
}

const n = 5;
console.log(n > 0 ? 'Положительное число' : n < 0 ? 'Отрицательное число' : 'Ноль',
);


const text ="";

console.log( text === "" ? 'The line is empty' : 'The line is not empty')

const day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday"
        break
    case 2:
        dayName = "Tuesday"
        break
    case 3:
        dayName = "Wednesday"
        break
    case 4:
        dayName = "Thursday"
        break
    case 5:
        dayName ="Friday"
        break
    case 6:
        dayName = "Saturday"
        break
    case 7:
        dayName = "Sunday"
}

console.log(dayName);


const seasonOfTheYear = 7;
let season;

switch (seasonOfTheYear) {
    case 12:
    case 1:
    case 2:
        season = "Winter"
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring"
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer"
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn"
        break
    default:
        console.log ('Select month')
}

console.log(season)


const Age = 17;
let isSubscribed = true;

if (Age >= 18 && isSubscribed){
    console.log ('Доступ разрешён')
} else {
    console.log ("Доступ запрещен")
}



const year = 2024;
let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0 ){
    isLeapYear = true;
} else {
    isLeapYear = fals;
}

console.log(`${year} year ${isLeapYear ? " is leap year" : "not is leap year"}`)