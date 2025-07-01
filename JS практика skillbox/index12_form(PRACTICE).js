var users = [
    {   name: 'Артур',
        login: 'art',
        password: '1234'},

    {   name: 'Миша',
        login: 'mishac',
        password: 'terat',}
];

var user = {
    name: prompt('Введите свое имя'),
    login: prompt('Введите свой логин'),
    password: prompt('Введите свой пароль')}
// var user = 
//     {   name: 'Артур',
//         login: 'art',
//         password: '1234'}

var index1 = users.findIndex(value => value.name === user.name);
var index2 = users.findIndex(value => value.login === user.login);
var index3 = users.findIndex(value => value.password === user.password);

if (index1 + index2 + index3 === 0){
    alert('Вы успешно прошли авторизацию');
} else {alert('Ошибка авторизации! Попробуйте еще раз')};
console.log(index1 + index2 + index3);