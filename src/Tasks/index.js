import { List, Item, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTask }) => (
    <List>
        {
            tasks.map(task => (
                <Item
                    hidden={task.done && hideDone}>
                    <Button
                        onClick={() => toggleDoneTask(task.id)}
                        done={task}>{task.done ? "✔" : ""}</Button>
                    <Content done={task.done}>{task.id}. {task.content}</Content>
                    <Button
                        onClick={() => removeTask(task.id)}
                        remove={task}>🗑</Button>
                </Item>
            ))
        }
    </List>
)

export default Tasks;