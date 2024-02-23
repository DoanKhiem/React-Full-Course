// import Header from "./Header"
// import Footer from "./Footer"
// import Food from "./Food"
import Card from "./components/Card"
import Button from "./components/Button"
import Student from "./components/Student"
import UserGreeting from "./components/UserGreeting"
function App() {
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
    </>
    
  )
}

export default App
