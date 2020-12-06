import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageLayout from "./components/PageLayout";
import DocumentLayout from "./components/DocumentLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import AddItem from "./views/AddItem";
import ListView from "./views/ListView";
import "./App.css";
import { useEffect, useState } from "react";
import APIList from "./services/APIList";
import { P } from "./components/Typography";

function App() {
  const [lists, setLists] = useState([]);

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
        {lists[0] === undefined ? (
          <P>Awaiting data</P>
        ) : (
          <>
            <SideBar lists={lists} />
            <Main>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Redirect to={`/${lists[0]._id}`} />}
                />
                <Route
                  path="/addItem"
                  component={() => (
                    <AddItem lists={lists} setLists={setLists} />
                  )}
                />
                <Route
                  exact
                  path={`/:id`}
                  component={() => (
                    <ListView lists={lists} setLists={setLists} />
                  )}
                />
              </Switch>
            </Main>
          </>
        )}
      </DocumentLayout>
      <PageFooter />
    </PageLayout>
  );
}

export default App;
