// 'use strict' 
function User(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.isAdmin = false;
    this.regDate = new Date();

}


function UserList(){
    this.users = [];
    this.add = function(user) {
        this.users.push(user);
    }
    getAllUsers = function() {
        for (let user of this.users)
        console.log(`Имя: ${user.firstName}\nФамилия: ${user.lastName}\nРегистрация: ${user.regDate}\n`)
    }
}
let list = new UserList();
    let user, array;
    while (
        (user = prompt("Введите имя и фамилию пользователя для регистрации (одной строкой через пробел):"))
        && (array = user.split(" "))
        && array.length === 2
    ) {
        list.add(new User(array[0], array[1], new Date()));
    };

list.getAllUsers();
