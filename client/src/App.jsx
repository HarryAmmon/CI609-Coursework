import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageLayout from "./components/PageLayout";
import DocumentLayout from "./components/DocumentLayout";
import { Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import AddItem from "./views/AddItem";
import ListView from "./views/ListView";
import "./App.css";
import { useEffect, useState } from "react";
import APIList from "./services/APIList";

function App() {
  const [list, setLists] = useState([]);
  useEffect(() => {
    const listAPI = new APIList("http://localhost:5000");
    listAPI.GetListsIDAndTitle().then((response) => {
      setLists(response);
    });
  }, []);
  return (
    <PageLayout>
      <PageHeader appTitle={"ToDo"} />
      <DocumentLayout>
        <SideBar lists={list} />
        <Main>
          <Switch>
            <Route path="/addItem" component={() => <AddItem />} />
            <Route exact path={`/:id`} component={ListView} />
          </Switch>
        </Main>
      </DocumentLayout>
      <PageFooter />
    </PageLayout>
  );
}

export default App;
