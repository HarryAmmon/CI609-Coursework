import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageLayout from "./components/PageLayout";
import DocumentLayout from "./components/DocumentLayout";
import ToDoForm from "./components/ToDoForm";
import { P } from "./components/Typography";
import ListTitle from "./components/ListTitle";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <PageLayout>
      <PageHeader appTitle={"ToDo"} />
      <DocumentLayout>
        <SideBar />
        <Main>
          <ListTitle name={"Reminders"} />
          <ToDoForm />
        </Main>
      </DocumentLayout>
      <PageFooter />
    </PageLayout>
  );
}

export default App;
