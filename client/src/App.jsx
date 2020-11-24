import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageLayout from "./components/PageLayout";
import DocumentLayout from "./components/DocumentLayout";
import ToDoItem from "./components/ToDoItem";
import { P } from "./components/Typography";
import ListTitle from "./components/ListTitle";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const ToDoList = [
    { title: "Item 1", note: "These are some notes about this item" },
    { title: "Item 3" },
    { title: "Item 2", note: "These are some notes" },
    { title: "Item 4" },
  ];
  return (
    <PageLayout>
      <PageHeader appTitle={"ToDo"} />
      <DocumentLayout>
        <SideBar />
        <div>
          <ListTitle name={"Test List"} />
          {ToDoList.map((item, index) => (
            <ToDoItem
              title={item.title}
              key={index}
              id={index}
              note={item.note}
            />
          ))}
          <P>
            Lucas ipsum dolor sit amet fisto lobot mandalore calamari organa
            wicket greedo moff organa skywalker. Palpatine moff yavin ackbar
            solo mara. Hutt darth darth darth yoda kessel. Skywalker amidala
            hutt moff moff. Skywalker fett tatooine skywalker yoda. Moff
            chewbacca qui-gon fett darth wookiee utapau secura. Skywalker hoth
            gamorrean mace grievous tatooine luke. Wedge jabba gamorrean thrawn.
            Skywalker ventress solo antilles mon wedge bespin moff. Aayla darth
            moff bespin. Jango antilles darth owen mara skywalker kamino leia
            kashyyyk
          </P>
        </div>
      </DocumentLayout>
      <PageFooter />
    </PageLayout>
  );
}

export default App;
