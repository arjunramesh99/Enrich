import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home_styles.css";

export default class Home extends React.Component {
    // constructor() {
    //     super();
    //
    //     this.handleClick = this.handleClick.bind(this);
    // }
    //
    // handleClick(e) {
    //     console.log(e);
    //     e.preventDefault();
    // }
    render() {
        return (
            <div className={"body"}>
                <h1 className="heading">Enrich</h1>
                <div className="div-block">
                    <Link className={"login-button"} to={"/learner"}>Learner</Link>
                    <Link className={"login-button"} to={"/educator"}>Educator</Link>
                </div>
            </div>
        )
    }
}
//<button><Link to={"/student"}>Student</Link></button>
//<button><Link to={"/teacher"}>Teacher</Link></button>
