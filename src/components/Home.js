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
                    <Link style={{textDecoration: "none"}} to={"/learner"}>
                        <a href="#" className="login-button">Learner</a>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={"/educator"}>
                        <a href="#" className="login-button">Educator</a>
                    </Link>
                </div>
            </div>
        )
    }
}
//<button><Link to={"/student"}>Student</Link></button>
//<button><Link to={"/teacher"}>Teacher</Link></button>
