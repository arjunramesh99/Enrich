import React from 'react';
import { Router, Route } from "react-router-dom";
import firebase from 'firebase';

import Home from './components/Home';
import EducatorHome from "./components/Educator/EducatorHome";
import Login from './components/Educator/Login'
import EnterRoom from "./components/Learner/EnterRoom";

import history from './components/History'
import LearnerHome from "./components/Learner/LearnerHome";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase_root: null,
            loggedInEducatorID: null,
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleEnterRoom = this.handleEnterRoom.bind(this);
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
        const firebase_root = firebase.database().ref();
        this.setState({firebase_root});
    }

    handleLogin(profName) {
        this.state.firebase_root.once("value", snap => {
            const prof_list = snap.val();
            let profIndex = -1;
            let loggedInEducatorID = null;

            if(prof_list !== null){
                profIndex = Object.entries(prof_list).findIndex(el => el[1].name === profName);
            }

            if(profIndex === -1){
                loggedInEducatorID = this.state.firebase_root.push({
                    name: profName
                });
                loggedInEducatorID = loggedInEducatorID.key;
            } else {
                loggedInEducatorID = Object.entries(prof_list)[profIndex][0];
            }

            this.setState({
                loggedInEducatorID
            })
        }).then( _ => {
            history.push('/educatorHome');
        });
    }

    handleEnterRoom(learnerName, educatorName, roomID) {
        this.state.firebase_root.once("value", snap => {
            const root_data = snap.val();
           const prof_list = Object.values(root_data);
           const profIndex = prof_list.map(e => e.name).indexOf(educatorName);
           const profID = Object.keys(root_data)[profIndex];
           console.log(root_data);
           console.log(profIndex);
           console.log(profID);
           if (profIndex !== -1) {
               if (prof_list[profIndex].classes.hasOwnProperty(roomID)) {
                   this.state.firebase_root.child(profID + '/classes/'+ roomID + '/students/').push(
                       { name: learnerName, ls: 1}
                   );
               }
               //this.state.firebase_root.child(prof_list[profIndex] + '/classes/').once("value", )
           }
           else {
               console.log("Not Found");
           }
        })
    }

    render() {
        return (
            <Router history={history}>
                <Route exact path={"/"}
                       component={Home}
                />

                <Route
                    path={"/learner"}
                    render={props => <EnterRoom {...props} handleEnterRoom={this.handleEnterRoom} /> }
                />

                <Route
                    path={"/educator"}
                    render={props => <Login {...props} handleLogin={this.handleLogin} />}
                />

                <Route
                    path={"/learnerHome"}
                    render={props => <LearnerHome {...props} />}
                />

                <Route
                    path={"/educatorHome"}
                    render={props => <EducatorHome {...props} {...this.state} />}
                />
            </Router>
        );
    }
}
export default App;
