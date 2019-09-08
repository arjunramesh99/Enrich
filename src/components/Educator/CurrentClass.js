import React from "react";
import { Switch, Route } from 'react-router-dom';
import '../../styles/educatorHome_styles.css'
import Chat from '../Chat/Chat'
import Transcript from "./Transcript";

const CurrentClassElements = props => {
    return (
        <div className={"current_class_parent"}>
            <Chat />
            <div className={"right_third"}>
                <div className={"learning_ratio_monitor_container"}>
                    <div className={"heading_1"}>Your Learning Ratio</div>
                    <div
                        className={"learning_ratio_monitor"}
                        style={{backgroundColor: props.calculateColorGradient(props.classroom)}}
                    >
                    </div>
                </div>
                <Transcript firebase_root={props.firebase_root} />
            </div>
        </div>

    );
}

class CurrentClass extends React.Component {
    constructor(props) {
        super(props);
        this.calculate_colour_gradient = this.calculate_colour_gradient.bind(this);
    }

    calculate_colour_gradient(classroom) {
        let student_count = 0;
        let num_positive = 0;
        if(classroom.students === undefined || classroom.students === null) {
            return "grey";
        }
        Object.values(classroom.students).forEach(student => {
            num_positive += student.ls;
            student_count++;
        });
        //console.log("Student count: " + student_count);
        //console.log("Positive: " + num_positive);
        let threshold = student_count / 2;
        const grad = 255 / threshold;
        let green_grad = (num_positive >= threshold ? 255 : grad * num_positive);
        let red_grad = (num_positive <= threshold ? 255 : 255 - grad * (num_positive - threshold));
        return "rgb(" + red_grad + ", " + green_grad + ", 0)";
    }

    render() {
        return (
            <Switch>
                <Route
                    exact path={'/educatorHome'}
                    render={() => <div className={"no_class_selected"}>Please select a classroom!</div>}
                />

                <Route
                    path={'/educatorHome/:class_index'}
                    render={props =>
                        <CurrentClassElements
                            {...props}
                            calculateColorGradient={this.calculate_colour_gradient}
                            classroom={this.props.classrooms[props.match.params.class_index]}
                            firebase_root={this.props.firebase_root}
                        />
                    }
                />
            </Switch>
    )
    }
}

export default CurrentClass;

/*<button
    href="#"
    className={"learning_ratio"}
    style={{backgroundColor: this.calculate_colour_gradient(this.props.classrooms[props.match.params.class_index])}}
>
</button>}*/
