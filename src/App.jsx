// import Header from "./Header"
// import Footer from "./Footer"
// import Food from "./Food"
import Card from "./components/Card";
import Button from "./components/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ColorPicker from "./components/ColorPicker";
import ToDoList from "./ToDoList";
import UseEffect from "./components/UseEffect";
import DigitalClock from "./components/DigitalClock";
import ComponentA from "./components/usecontext/componentA";
import UseRef from "./components/UseRef";
function App() {
  const fruits = [
    { id: 1, name: "grape", calogies: 52 },
    { id: 2, name: "banana", calogies: 33 },
    { id: 3, name: "cherry", calogies: 44 },
    { id: 4, name: "lemon", calogies: 55 },
    { id: 5, name: "fig", calogies: 64 },
    { id: 6, name: "apple", calogies: 15 },
  ];
  const vegetables = [
    { id: 1, name: "potatoes", calogies: 52 },
    { id: 2, name: "celery", calogies: 33 },
    { id: 3, name: "carrots", calogies: 44 },
    { id: 4, name: "corn", calogies: 55 },
    { id: 5, name: "fig", calogies: 64 },
    { id: 6, name: "broccoli", calogies: 15 },
  ];
  return (
    <>
      {/* <Header />
      <Food />
      <Footer /> */}
      <Card />
      <Card />
      <Button />
      <div>
        <Student name="Huy" age={20} isStudent={false} />
        <Student name="Quân" age={45} isStudent={true} />
        <Student name="Chiến" age={55} isStudent={false} />
        <Student name="Hòa" age={33} isStudent={true} />
        <Student />
      </div>

      <UserGreeting username="Khiem" isLoggedIn={false} />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
      <MyComponent />
      <Counter />
      <Form />
      <ColorPicker />
      <ToDoList />
      <UseEffect />
      <DigitalClock />
      <ComponentA />
      <UseRef />
    </>
  );
}

export default App;
