import {useState, useEffect, useCallback} from 'react';

function TodoList() {
    const [tasks, setTasks] = useState(['Buy groceries', 'Walk the dog']);
    const [newTasks, setNewTasks] = useState('');

    const addTask = useCallback(() => {
        if(newTasks.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, newTasks])
            setNewTasks('')
        }       
    }, [newTasks])

    return (
        <div>
            <h3>To-Do List</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}> {task} </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTasks}
                onChange={(taskToAdd) => setNewTasks(taskToAdd.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    )

}

export default TodoList