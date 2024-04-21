// App.jsx

// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import TeacherList from "./components/TeacherList";
import StudentDetail from "./components/StudentDetail";
import TeacherDetail from "./components/TeacherDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/teachers" component={TeacherList} />
          <Route path="/students/:id" component={StudentDetail} />
          <Route path="/teachers/:id" component={TeacherDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
