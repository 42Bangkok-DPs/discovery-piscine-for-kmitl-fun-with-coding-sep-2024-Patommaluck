
const ftList = document.getElementById('ft_list');

function addNewTodo(todoText) 
{
    const todoDiv = document.createElement('div');
    todoDiv.className = 'text-item';
    todoDiv.textContent = todoText;
    
    ftList.prepend(todoDiv);

    todoDiv.addEventListener('click', function() {
        if (confirm('Do you want to remove this ToDo?')) {
            todoDiv.remove();
            saveTodos(); 
        }
    });
}

function createtodo() 
    {
    const todoText = prompt('Enter your new ToDo:');
    if (todoText && todoText.trim()) {
        addNewTodo(todoText);
        saveTodos();  
    }
    }


function saveTodos() {
    let todos = [];
    document.querySelectorAll('.text-item').forEach(Text => {
        todos.push(todo.textContent);
    });
    document.cookie = `todos=${JSON.stringify(todos)}; path=/;`;
}


function loadTodos() {
    const cookies = document.cookie.split(';');
    let todos = [];
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'todos') {
            todos = JSON.parse(decodeURIComponent(value));
        }
    });

    todos.reverse().forEach(todo => addNewTodo(todo));
    
}


window.onload = function() {
    loadTodos();
};