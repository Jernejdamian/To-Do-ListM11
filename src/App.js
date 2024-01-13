
import './App.css';
import Buttons from './Buttons';
import Form from './Form';
import Tasks from './Tasks';
import Section from './Section';
import Container from './Container';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1, content: "Zrobić podstawową todo liste w JS", done: true,
    },
    {
      id: 2, content: "Przenieść podstawową todo liste do React-a", done: false,
    },
  ]);

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task, done: !task.done
        }
      return task
    }))
  };

  const toggleAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, done: true,
    })))
  };

  const addNewTasks=(content)=>{
    setTasks(tasks=>[
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ])
  }

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
