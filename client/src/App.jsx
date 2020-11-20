import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageLayout from "./components/PageLayout";
import DocumentLayout from "./components/DocumentLayout";
import ToDoItem from "./components/ToDoItem";

function App() {
  const ToDoList = [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
    { title: "Item 4" },
  ];
  return (
    <PageLayout>
      <PageHeader />
      <DocumentLayout>
        <h1>
          test title this should be really long but not be longer than the
          1250px that I defined for this component to be lol
        </h1>
        {ToDoList.map((item, index) => (
          <ToDoItem title={item.title} key={index} id={index} />
        ))}
      </DocumentLayout>
      <PageFooter />
    </PageLayout>
  );
}

export default App;
