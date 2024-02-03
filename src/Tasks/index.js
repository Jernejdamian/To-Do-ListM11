import "./style.css";
import { TasksList } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTask }) => (
    <TasksList>
        {
            tasks.map(task => (
                <li className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}>
                    <button
                        onClick={() => toggleDoneTask(task.id)}
                        className="tasks__button tasks__button--done">{task.done ? "✔" : ""}</button>
                    <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>{task.id}. {task.content}</span>
                    <button
                        onClick={() => removeTask(task.id)}
                        className="tasks__button tasks__button--remove">🗑</button>
                </li>
            ))
        }
    </TasksList>
)

export default Tasks;