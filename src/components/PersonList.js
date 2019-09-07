import React from 'react';
import { Link } from 'react-router-dom';

export default class PersonList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map(el => <li key={el}>{el}</li>)}
                </ul>
                <button><Link to={"/"}>Back</Link></button>
            </div>
        )
    }
}

