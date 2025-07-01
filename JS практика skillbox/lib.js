// 'use strict';

(function() {
    // Глобальная переменная start - начало игры
    window.start = function(){
    game();
    }
    var n = 4;
    var num= n; // число попыток

    
    var min = 1; //нижний предел (от)
    var max = 5; // верхний предел (до)
    var i = Math.random()*(max-min+1) + min; //рандомное число в интервале (max, min)
    i = Math.floor(i); //округление вниз до целого числа
    i !== max + 1;

    //ИГРА----------------------------------------------------------------------
    var game = function() {
    
    // Функция для склонения слова 'попытка' в зависимости от числа оставшихся попыток
    var numToStr = function(num, arrText) {
        if (num % 10 === 1 && num % 100 !== 11) { 
          return arrText[0];
        } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
          return arrText[1];            
        }
        return arrText[2];
    }

    // окно ввода
    var s = prompt('введите загаданное число от ' + min + ' до ' + max + '. У вас осталось ' + num + numToStr(num, [' попытка', ' попытки', ' попыток'])); 

    if (s < i){
        alert('Вы вмели слишком маленькое число. Введите число больше');
        num--;
        console.log('У вас осталось ' + num + numToStr(num, [' попытка', ' попытки', ' попыток']));
    } else if (s > i){
        alert('Вы вмели слишком большое число. Введите число меньше');
        num--;
        console.log('У вас осталось ' + num + numToStr(num, [' попытка', ' попытки', ' попыток']));
    } else if (s == i){
        alert('Вы победили!');
        num = 0;
    }

    if(num > 0){
        game();
    } else {
        alert('Игра окончена');
        num = n;} //число попыток после завершения игры    
    } 
})()


