import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTasks }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTasks(newTaskContent.trim());
            setNewTaskContent("");
        }
    };

    const inputRef = useRef(null);

    const inputFocus = () => {
        inputRef.current.focus()
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Jakie jest następne zadanie?" />
            <button
                onClick={inputFocus}
                className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;

