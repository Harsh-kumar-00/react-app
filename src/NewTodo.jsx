import { useEffect, useState } from "react";

function NewTodo() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    //load todos on app refresh
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    //save todos whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Add a new todo
    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task }]);
        setTask("");
    };

    // Delete a todo
    const deleteTodo = (id) => {
        const updatedTodo = todos.filter(todos => todos.id !== id);
        setTodos(updatedTodo);
    };

    //Edit todo
    const editTodo = (id) => {
        const newText = prompt("Edit Todo: ");

        if (!newText) return;

        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };

    //UI
    return (
        <div>
            <h2>NEW TODO APP With localStorage</h2>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task"
            />
            <button onClick={addTodo}>ADD</button>
            <ul>
                {/*todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))*/}
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => editTodo(todo.id)}>
                            Edit
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NewTodo;
