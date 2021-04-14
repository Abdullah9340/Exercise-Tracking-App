import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path = "/" exact component = {ExericseList}/>
      <Route path = "/edit/:id"  component = {EditExercise}/>
      <Route path = "/create"  component = {CreateExercise}/>
      <Route path = "/user"  component = {CreateUser}/>
    </Router>
  );
}

export default App;
