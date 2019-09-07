import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import Home from './components/Home';
import firebase from 'firebase';

class App extends React.Component {

    constructor() {
        super();
        const firebaseConfig = {
            apiKey: "AIzaSyDci15pZLADUPwyqprrw3oZciLSnzpJphk",
            authDomain: "enrichdataba.firebaseapp.com",
            databaseURL: "https://enrichdataba.firebaseio.com",
            projectId: "enrichdataba",
            storageBucket: "enrichdataba.appspot.com",
            messagingSenderId: "986011730918",
            appId: "1:986011730918:web:7e3a2c8cb779465011cc27"
        };
        try {
            firebase.initializeApp(firebaseConfig);
            console.log("Firebase Initialized");
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        const studentList = ["Student 1", "Student 2", "Student 3"];
        const teacherList = ["Teacher 1", "Teacher 2", "Teacher 3"];
        //const classrooms = firebase.database().ref('classrooms/');
        //classrooms.push({test_data4: "hello"});
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
