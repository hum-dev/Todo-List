document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');


//delete todo
    todoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            const todoItem = e.target.parentElement;
            todoItem.parentNode.removeChild(todoItem);

        }
    });

//add todo
    const addTodo = todoForm ['add-tasks'];
    addTodo.addEventListener('click', function(e) {
        e,preventDefault();

        //create todo item
        const value = addTodo.querySelector('input[type="text"]').value;
        const todoItem = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content to todo item
        taskName.textContent = value;
        deleteBtn.textContent = 'Delete';

        // add class to todo item
        taskName.classList.add('skill');
        deleteBtn.classList.add('delete');

        // append todo item to todo list
        todoItem.appendChild(taskName);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        // clear input
        addTodo.querySelector('input[type="text"]').value = '';
})


});