// task 1

function showMinimum (a, b) {
    if (a < b) {
       return a;
    } else {
       return b;
    }
}

console.log(showMinimum (23, 23));



// task 2

function checkNumber (c) {
        if (c%2 === 0) {
            return ('число четное');
        } else  if (isNaN(c)){
            return ('это не число');
        }    
        else {
            return ('число нечетное');
        }
}

console.log(checkNumber (4));


// task 3.1

function multOne (d) {
    return d**2; 
}
alert (multOne (4))

// task 3.2

function multOne (d) {
    return d**2; 
}
console.log(multOne (2));

// task 4 

const age = prompt ('Сколько вам лет?')

function checkAge() {
    if (age < 0) {
        return ('Вы ввели неправильное значение');
    } else if (age >= 13){
        return ('Добро пожаловать!');
    } else if (isNaN(age)) {
        return ('Введите число!')
    }
    else {
        return ('Привет, друг!');

    } 
}
alert( checkAge());

// task 5

const x = prompt ('Введите первое число');
const y = prompt ('Введите второе число');

function checkNumbers() {

    if ((isNaN(x)) || (isNaN(y))) {
        return ('Одно или оба значения не являются числом')
    } else {
        return x * y
    }
     
}

console.log(checkNumbers ());

// task 6

let tellNumber = prompt ('Загадайте число')

function multiply() {
    if (isNaN(tellNumber)) {
        return ('Переданный параметр не является числом')
    } else if(tellNumber >= 0 && tellNumber <= 10) {
        
            let n
            n = tellNumber ** 3;
            return (`${tellNumber} в кубе равняется ${n}`);
        } else {
            return ('Укажите значение от 0 до 10')
        }
        
    }
    
console.log(multiply ());





