$('#orderForm').on('submit', function()
{
    let tour = $('#inp1').val();
    let tarif = $('#inp2').val();
    let date = new Date($('#inp3').val());
    let month = date.getMonth();
    let kol = $('#inp4').val();
    kol = Number(kol);
    let tel = $('#inp5').val();
    let text = $('#inp6').val();

    let stoim = 0;
    let fix = 1;

    if(tarif == 'Эконом'){
        fix = 1;
        if(tour == 'СПБ - Москва'){
            stoim = kol*500*fix
    }
    if(tour == 'СПБ - Сочи'){
        if((month == 4)||(month == 5)||(month == 6)||(month == 7)||(month == 8)||(month == 9)){
            stoim = kol*500*fix
        } else {
            stoim = kol*300*fix
        }
    }
    if(tour == 'Москва- Калининград'){
        if((month == 1)||(month == 5)||(month == 6)||(month == 7)||(month == 8)||(month == 12)){
            stoim = kol*300*fix
        } else {
            stoim = kol*250*fix
        }
    }
    if(tour == 'Москва - Мурманск'){
        if((month == 1)||(month == 2)||(month == 6)||(month == 7)||(month == 8)||(month == 12)){
            stoim = kol*300*fix
        } else {
            stoim = kol*250*fix
        }
    }
    }



    if (tarif == 'Бизнес'){
        fix = 2;
        if(tour == 'СПБ - Москва'){
            stoim = kol*500*fix
    }
    if(tour == 'СПБ - Сочи'){
        if((month == 4)||(month == 5)||(month == 6)||(month == 7)||(month == 8)||(month == 9)){
            stoim = kol*500*fix
        } else {
            stoim = kol*300*fix
        }
    }
    if(tour == 'Москва- Калининград'){
        if((month == 1)||(month == 5)||(month == 6)||(month == 7)||(month == 8)||(month == 12)){
            stoim = kol*300*fix
        } else {
            stoim = kol*250*fix
        }
    }
    if(tour == 'Москва - Мурманск'){
        if((month == 1)||(month == 2)||(month == 6)||(month == 7)||(month == 8)||(month == 12)){
            stoim = kol*300*fix
        } else {
            stoim = kol*250*fix
        }
    }
    }

    alert(`Информация по билету: 
        Маршрут: ${tour} 
        Тариф: ${tarif}
        Дата вылета: ${date} 
        Стоимость вашего билета на ${kol} человек составит ${stoim} у.е.
        `)
})