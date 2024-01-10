
import './App.css';
import Buttons from './Buttons';
import Form from './Form';
import Tasks from './Tasks';
import Section from './Section';
import Container from './Container';


function App() {

  const tasks = [
    {
      content: "Zrobić podstawową todo liste w JS", done: true,
    },
    {
      content: "Przenieść podstawową todo liste do React-a", done: false,
    },
  ];

  const hideDone = false;

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form />}
      />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
          />}
      />
    </Container>
  );
}

export default App;
