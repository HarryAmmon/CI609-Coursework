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
import { useHistory } from "react-router-dom";

function App() {
  const [list, setLists] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const listAPI = new APIList("http://localhost:5000");
    listAPI.GetListsIDAndTitle().then((response) => {
      setLists(response);
      history.push(`/${response[0]._id}`);
    });
  }, [history]);

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
