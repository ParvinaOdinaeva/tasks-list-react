import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reatc-a", done: false },
  { id: 2, content: "Zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>

      <Header title="Task list" />

      <Section title="Add new task"
        body={<Form />}
      />

      <Section title="Task list"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

    </Container>
  );
}

export default App;
