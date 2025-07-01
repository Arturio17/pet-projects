const minPrice = 1.8;
let Gamers =[];
let i = 0;
let priceArray =[];
let sum =0;


function Users(price){
    i +=1;
    if(price >= minPrice){
    Gamers.push(' Игрок ' + i + ': ' + price +'$ ');
    priceArray.push(price);
    
    }
    else{
        Gamers.push(' Игрок ' + i + ': ' + price +'$ ' + ' (недопущен)');
    }
    
};


// User1 = new Users(2);
// User2 = new Users(1.5);
// User3 = new Users(7);

document.querySelector(".minPrice").innerHTML = JSON.stringify(minPrice + '$');
///////

document.querySelector('.start').addEventListener('click', function(){
    new Users (document.querySelector('.link').valueAsNumber);
    document.querySelector(".Players").innerHTML = JSON.stringify(Gamers);
});



document.querySelector('.end').addEventListener('click', function(){
    priceArray.max = function( array ){
    return Math.max.apply( Math, array );

};
document.querySelector(".result").innerHTML = JSON.stringify('Победитель: ' + priceArray.max(priceArray) + '$'); 
priceArray.forEach(x => {
    sum += x;
});
document.querySelector(".itog").innerHTML = JSON.stringify('Общая сумма: ' + sum + '$');

sum =0;
});
