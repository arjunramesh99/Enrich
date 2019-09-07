import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import Home from './components/Home'

class App extends React.Component {


    render() {
        const studentList = ["Student 1", "Student 2", "Student 3"];
        const teacherList = ["Teacher 1", "Teacher 2", "Teacher 3"];

        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path={"/"}
                           component={Home}
                           />
                    <Route
                        path={"/student"}
                        render={props => <PersonList {...props} list={studentList} />}
                    />
                    <Route
                        path={"/teacher"}
                        render={props => <PersonList {...props} list={teacherList} />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
