import { useState } from "react";
import "./style.css";

const Form = ({ addNewTasks }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTasks(newTaskContent.trim());
            setNewTaskContent("");
        }
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Jakie jest następne zadanie?" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;

