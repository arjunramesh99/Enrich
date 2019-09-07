import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <button><Link to={"/student"}>Student</Link></button>
                <button><Link to={"/teacher"}>Teacher</Link></button>
            </div>
        )
    }
}
