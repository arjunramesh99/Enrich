import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import Home from './components/Home';
import firebase from 'firebase';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            learners: [],
            educators: [],
        };

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

    componentDidMount() {
        const class1_ref = firebase.database().ref('classrooms/class1');
        class1_ref.on('value', snap => {
            let {professors:educators, students:learners} = snap.val();
            educators = Object.values(educators);
            learners = Object.values(learners);
            this.setState({educators, learners});
        })
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
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
