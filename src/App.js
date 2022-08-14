import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "iść na spacer", done: false },
  { id: 2, content: "zjeść kolacje", done: true },
];

const hideDones = true;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />


      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDones={hideDones} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDones={hideDones} />
        }
      />

    </Container>
  );
}

export default App;
