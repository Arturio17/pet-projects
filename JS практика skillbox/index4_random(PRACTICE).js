function printHello(firstName, lastName){
    firstName = firstName || 'Игрок';
    lastName = lastName || '№1234';
    var fullName = firstName + ' ' + lastName;
    alert('Добрый день, ' + fullName);
}

function printNumber(min, max){
    var i = Math.random()*(max-min) + min; //рандомное число в интервале (max, min)
    i = Math.ceil(i);
    i !== 0;
    s = prompt('введите загаданное число от ' + min + ' до ' + max);
    if (s < i){
        alert('Вы вмели слишком маленькое число. Введите число больше');

    }
    if(s > i){
        alert('Вы вмели слишком большое число. Введите число меньше');
    }
    if(s ==i){
        alert('Вы победили!');
        printNumber(min, max);
    }
}

printHello('Дзгоев', 'Артур');
printNumber(1, 2);
