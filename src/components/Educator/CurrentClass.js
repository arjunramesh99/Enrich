import React from "react";
import { Switch, Route } from 'react-router-dom';

class CurrentClass extends React.Component {
    constructor(props) {
        super(props);
        this.calculate_colour_gradient = this.calculate_colour_gradient.bind(this);
    }

    calculate_colour_gradient(classroom) {
        console.log(classroom);
        /*let student_count = 0;
        let num_positive = 0;
        Object.values(snap.val()).forEach(student => {
            num_positive += student.ls;
            student_count++;
        });
        console.log("Student count: " + student_count);
        console.log("Positive: " + num_positive);
        let threshold = student_count / 2;
        const grad = 255 / threshold;
        let green_grad = (num_positive >= threshold ? 255 : grad * num_positive);
        let red_grad = (num_positive <= threshold ? 255 : 255 - grad * (num_positive - threshold));*/
        return "rgb(255, 0, 0)";
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact path={'/educatorHome'}
                        render={() => <p>Please Select a classroom!</p>}
                    />

                    <Route
                        path={'/educatorHome/:class_index'}
                        render={(props) =>
                            <button>
                                href="#"
                                className={"learningStateButton"}
                                style={{backgroundColor: this.calculate_colour_gradient(this.props.classrooms[this.props.match.params.class_index])}}
                            </button>}
                    />
                </Switch>
            </div>
        )
    }
}

export default CurrentClass;
