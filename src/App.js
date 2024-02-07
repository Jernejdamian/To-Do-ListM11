import Buttons from './Buttons';
import Form from './Form';
import Tasks from './Tasks';
import Section from './Section';
import Container from './Container';
import {  useState } from 'react';
import { useTasks } from './useTasks';

function App() {

  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const {
    tasks,
    addNewTasks,
    toggleAllDone,
    removeTask,
    toggleDoneTask,
  }=useTasks();

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title={"Dodaj nowe zadanie"}
        body={
          <Form
            addNewTasks={addNewTasks}
          />}
      />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            toggleAllDone={toggleAllDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleDoneTask={toggleDoneTask}
          />}
      />
    </Container>
  );
}

export default App;
