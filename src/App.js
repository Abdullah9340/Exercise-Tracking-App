import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExerciseList from "./components/exerciseList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path = "/" exact component = {ExerciseList}/>
      <Route path = "/edit/:id"  component = {EditExercise}/>
      <Route path = "/create"  component = {CreateExercise}/>
      <Route path = "/user"  component = {CreateUser}/>
    </Router>
  );
}

export default App;
