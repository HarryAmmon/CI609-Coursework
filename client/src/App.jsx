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
        {list[0] === undefined ? (
          <P>Awaiting data</P>
        ) : (
          <>
            <SideBar lists={list} />
            <Main>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Redirect
                      to={
                        list[0] !== undefined ? `/${list[0]._id}` : "/addItem"
                      }
                    />
                  )}
                />
                <Route path="/addItem" component={() => <AddItem />} />
                <Route exact path={`/:id`} component={ListView} />
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
