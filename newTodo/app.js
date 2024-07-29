let todo = document.querySelector('.todo');
let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
//все функции
addElements();doElemetsCheck();deleteElements();deleteAllElements();

//добавление в локальное хранилице
function toLocal(){
    let todoses = todo.innerHTML;
    localStorage.setItem('todoses', todoses);
}

//добавление задачи
function addElements(){ 
    addButton.addEventListener('click', function (){
        if(addMessage.value ===''){
            alert('Нельзя ввести пустую строку')
        } else{
            let newTodo = document.createElement('li');
            newTodo.innerHTML = `${addMessage.value}<button class="btnDelete" type="submit">X</button><input class="btnCheck" type="checkbox">`;
            todo.appendChild(newTodo);            
            addMessage.value='';
            doElemetsCheck();
            deleteElements();
            toLocal();
        }
    }); 
    //Добавление при нажатии кнопки "Enter"
    addMessage.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            if(addMessage.value ===''){
                alert('Нельзя ввести пустую строку')
            } else{
                let newTodo = document.createElement('li');
                newTodo.innerHTML = `${addMessage.value}<button class="btnDelete" type="submit">X</button><input class="btnCheck" type="checkbox">`;
                todo.appendChild(newTodo);            
                addMessage.value='';
                doElemetsCheck();
                deleteElements();
                toLocal();
            }
        }
      });   
}

//выполнение задачи
function doElemetsCheck(){
    let checkButtons = document.getElementsByClassName('btnCheck')
    for(let i=0; i < checkButtons.length; i++){
        let checkButton = checkButtons[i];
        checkButton.addEventListener('click', function(ev){
            if(ev.target.checked === true){
                checkButton.parentElement.classList.add('checked');
                toLocal();
            }
            else{
                checkButton.parentElement.classList.remove('checked')

                toLocal();
            }
        })

        //выполнение всех задач одновременно
        let checkAllButton = document.querySelector('.checkAll');
        checkAllButton.addEventListener('click', function(){
            checkButton.parentElement.classList.add('checked');
            toLocal();
        });

        //выполнить все задачи
        checkAllButton.addEventListener('click', function(){
        checkButton.parentElement.classList.add('checked')
        checkButton.checked = true;
        toLocal();
        });
        
        if(checkButton.parentElement.classList.value==='checked'){
            checkButton.checked = true;
        }
    }
}

//удаление задачи
function deleteElements(){
    let deleteButtons = document.getElementsByClassName('btnDelete')
    for(let i=0; i < deleteButtons.length; i++){
        deleteButton = deleteButtons[i];
        deleteButton.addEventListener('click', function(ev){
            ev.target.parentElement.remove(); 
            toLocal(); 
        })   
    }
}

//очистить все задачи
function deleteAllElements(){
    let clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', function(){
        todo.innerHTML='';
        localStorage.clear();
    })
}

//извлечение из локального хранилища
if(localStorage.getItem('todoses')){
    todo.innerHTML = localStorage.getItem('todoses');
    doElemetsCheck();
    deleteElements();   
}


