import { useRef, useState } from "react";
import { Wrapper, Button } from "./styled";

const Form = ({ addNewTasks }) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTasks(newTaskContent.trim());
            setNewTaskContent("");
            inputRef.current.focus()
        }
    };

    return (
        <Wrapper
            onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Jakie jest następne zadanie?" />
            <Button>
                Dodaj zadanie
            </Button>
        </Wrapper>
    );
}

export default Form;

