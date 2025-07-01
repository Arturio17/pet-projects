const pie_btn = document.querySelector('.pie');
const cake_btn = document.querySelector('.cake');
const other_btn = document.querySelector('.other');
const action_btn = document.querySelector('.action');

const menuContainer = document.querySelector('.menu_container');

let pie_products = [   
{
    id: 'pie_1',
    type: 'pie',
    img: 'pie1_chicken_cheese_mushroom.jpg',
    titleRus: 'Осетинский пирог с курицей, сыром и грибами',
    mass: '1300г',
    price: '800'
},
{
    id: 'pie_2',
    type: 'pie',
    img: 'pie2_chicken_cheese.jpg',
    titleRus: 'Осетинский пирог с курицей и сыром',
    mass: '1300г',
    price: '800'
},
{
    id: 'pie_3',
    type: 'pie',
    img: 'pie3_beef.jpg',
    titleRus: 'Осетинский пирог с говядиной',
    mass: '1300г',
    price: '850'
},
{
    id: 'pie_4',
    type: 'pie',
    img: 'pie4_beef_pork.jpg',
    titleRus: 'Осетинский пирог с говядиной и свининой',
    mass: '1300г',
    price: '800'
},
{
    id: 'pie_5',
    type: 'pie',
    img: 'pie5_cherry.jpg',
    titleRus: 'Осетинский пирог с вишней',
    mass: '1500г',
    price: '750'
},
{
    id: 'pie_6',
    type: 'pie',
    img: 'pie6_cheese.jpg',
    titleRus: 'Осетинский пирог с сыром',
    mass: '1200г',
    price: '700'
},
{
    id: 'pie_7',
    type: 'pie',
    img: 'pie7_cheese_mushroom.jpg',
    titleRus: 'Осетинский пирог с сыром и грибами',
    mass: '1200г',
    price: '750'
},
{
    id: 'pie_8',
    type: 'pie',
    img: 'pie8_cheese_beet.jpg',
    titleRus: 'Осетинский пирог с сыром и листьями свеклы',
    mass: '1200г',
    price: '750'
},
{
    id: 'pie_9',
    type: 'pie',
    img: 'pie9_cheese_beet2.jpg',
    titleRus: 'Осетинский пирог с сыром и черемшой',
    mass: '1200г',
    price: '750'
},
{
    id: 'pie_10',
    type: 'pie',
    img: 'pie10_cheese_beet3.jpg',
    titleRus: 'Осетинский пирог с сыром и зеленью',
    mass: '1200г',
    price: '750'
},
{
    id: 'pie_11',
    type: 'pie',
    img: 'pie11_cheese_potato.jpg',
    titleRus: 'Осетинский пирог с картошкой и сыром',
    mass: '1200г',
    price: '700'
},
{
    id: 'pie_12',
    type: 'pie',
    img: 'pie12_cheese_potato_mushroom.jpg',
    titleRus: 'Осетинский пирог с картошкой, сыром и грибами',
    mass: '1200г',
    price: '750'
},
{
    id: 'pie_13',
    type: 'pie',
    img: 'pie13_cabbage.jpg',
    titleRus: 'Осетинский пирог с капустой',
    mass: '1200г',
    price: '650'
},
{
    id: 'pie_14',
    type: 'pie',
    img: 'pie14_cabbage_mushroom.jpg',
    titleRus: 'Осетинский пирог с капустой и грибами',
    mass: '1200г',
    price: '700'
},
{
    id: 'pie_15',
    type: 'pie',
    img: 'pie15_pumpkin.jpg',
    titleRus: 'Осетинский пирог с тыквой (не сладкой)',
    mass: '1200г',
    price: '700'
}
];

let cake_products = [
    {
    id: 'cake_1',
    type: 'cake',
    img: 'cake1_napoleon.webp',
    titleRus: 'Торт наполеон',
    mass: 'от 2000г',
    price: '900 / 1 кг'
},
{
    id: 'cake_2',
    type: 'cake',
    img: 'cake2_medovik.jpg',
    titleRus: 'Торт медовый крем чиз',
    mass: 'от 2000г',
    price: '1200 / 1 кг'
},
{
    id: 'cake_3',
    type: 'cake',
    img: 'cake3_palchiki.jpg',
    titleRus: 'Пальчики с грецкими орехами',
    mass: 'от 2000г',
    price: '850 / 1 кг'
}
];

let other_products = [
    {
        id: 'other_1',
        type: 'other',
        img: 'other1_adjika250.jpg',
        titleRus: 'Аджика домашняя',
        mass: '250г',
        price: '170'
    },
    {
        id: 'other_2',
        type: 'other',
        img: 'other2_adjika350.jpg',
        titleRus: 'Аджика домашняя',
        mass: '350г',
        price: '250'
    }
];

let action_products = [
    {
        id: 'action_1',
        type: 'action',
        img: 'action1_settradition.jpg',
        titleRus: 'Сет традиционный: Картошка+сыр, Сыр, Говядина',
        mass: '1500г',
        price: '1300'
    },
    {
        id: 'action_2',
        type: 'action',
        img: 'action2_setmeet.jpg',
        titleRus: 'Сет Мясной: Курица+сыр, Свинина+Говядина, Говядина',
        mass: '1800г',
        price: '1500'
    }
]

function colorChange(type_btn){
    // const all_btn = document.querySelectorAll('#menu_btn');
    type_btn.addEventListener('click', () => {
        type_btn.classList.add('color_btn')

    })
}
colorChange(pie_btn);colorChange(cake_btn);colorChange(other_btn);colorChange(action_btn);

function buttonClick(type_btn, type_products){
    type_btn.addEventListener('click', () => {
        renderProductCards(type_products, menuContainer);
    })
}
buttonClick(pie_btn,pie_products);buttonClick(cake_btn,cake_products);buttonClick(other_btn,other_products);buttonClick(action_btn,action_products);


//создание карточки товара
const renderProductCard = (product) => {
    const li = document.createElement('li');
    li.classList.add('menu_item');
    li.innerHTML = `<a id="${product.id}">
        <img src="./img/товары/${product.img}" alt="">
        <div class="item_text">
            <div class="item_titleRus">${product.titleRus}</div>
            <div class="item_mass">${product.mass}</div>
            <div class="item_price">${product.price}</div>
        </div>
        </a>
`
    return li;
};

//добавление товаров на страницу
const appendProductCard = (product, container) => {
    container.append(product);
}
const renderProductCards = (products, container) => {
    menuContainer.innerHTML =''
    products.forEach((product) => {
        const card = renderProductCard(product);
        appendProductCard(card, container)
    })
};

//отображение меню (пирогов) при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu_container');
    renderProductCards(pie_products, menuContainer);
});
