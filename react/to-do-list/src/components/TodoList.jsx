import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    function addTask() {
        // Prevent adding empty tasks
        if (!text.trim()) return;
        // Add a new task object to the existing "tasks" array
        // Each task has a unique id, the entered text, and a "done" flag (false by default)
        setTasks([...tasks, { id: Date.now(), text, done: false }]);
        // Clear the input field after adding
        setText('');
    }

    function toggleTask(id) {
        // Use map() to create a new array with the updated task
        setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    }

    function deleteTask(id) {
        // Use filter() to remove the task that matches the given id
        setTasks(tasks.filter((t) => t.id !== id));
    }

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList
