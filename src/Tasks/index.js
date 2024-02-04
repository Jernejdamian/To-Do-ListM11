import "./style.css";
import { List, Item, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTask }) => (
    <List>
        {
            tasks.map(task => (
                <Item
                    hidden={task.done && hideDone}>
                    <Button
                        onClick={() => toggleDoneTask(task.id)}
                        done={task}>{task.done ? "✔" : ""}</Button>
                    <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>{task.id}. {task.content}</span>
                    <Button
                        onClick={() => removeTask(task.id)}
                        remove={task}>🗑</Button>
                </Item>
            ))
        }
    </List>
)

export default Tasks;