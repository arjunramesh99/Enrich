import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import firebase from 'firebase';

import PersonList from "./components/PersonList";
import Home from './components/Home';
import LearnerHome from "./components/LearnerHome";
import EducatorHome from "./components/EducatorHome";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_class: null,
            learners: [],
            educators: [],
        };


    }

    componentDidMount() {
        // initialize firebase
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

        // create a reference to a classroom
        const class1_ref = firebase.database().ref('classrooms/class1');
        class1_ref.on('value', snap => {
            let {professors:educators, students:learners} = snap.val();
            educators = Object.values(educators);
            learners = Object.values(learners);
            this.setState({current_class: class1_ref, educators, learners});
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path={"/"}
                           component={Home}
                           />
                    <Route
                        path={"/learner"}
                        render={props => <PersonList {...props} list={this.state.learners} />}
                    />
                    <Route
                        path={"/educator"}
                        render={props => <PersonList {...props} list={this.state.educators} />}
                    />

                    <Route
                        path={"/learnerHome"}
                        render={props => <LearnerHome {...props} curr_classroom={this.state.current_class} />}
                    />

                    <Route
                        path={"/educatorHome"}
                        render={props => <EducatorHome {...props} curr_classroom={this.state.current_class} />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
