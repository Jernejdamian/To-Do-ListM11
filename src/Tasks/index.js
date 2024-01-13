import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTask }) => (
    <ul className="tasks">
        {
            tasks.map(task => (
                <li className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}>
                    <button
                        onClick={() => toggleDoneTask(task.id)}
                        className="tasks__button tasks__button--done">{task.done ? "✔" : ""}</button>
                    <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>{task.content}</span>
                    <button
                        onClick={() => removeTask(task.id)}
                        className="tasks__button tasks__button--remove">🗑</button>
                </li>
            ))
        }
    </ul>
)

export default Tasks;