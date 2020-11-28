import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageLayout from "./components/PageLayout";
import DocumentLayout from "./components/DocumentLayout";
import ToDoForm from "./components/ToDoForm";
import { Switch, Route } from "react-router-dom";
import ListTitle from "./components/ListTitle";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import AddItem from "./views/AddItem";
import "./App.css";

function App() {
  return (
    <PageLayout>
      <PageHeader appTitle={"ToDo"} />
      <DocumentLayout>
        <SideBar />
        <Main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <>
                  <ListTitle name={"Reminders"} />
                  <ToDoForm />
                </>
              )}
            />
            <Route path="/addItem" component={() => <AddItem />} />
          </Switch>
        </Main>
      </DocumentLayout>
      <PageFooter />
    </PageLayout>
  );
}

export default App;
