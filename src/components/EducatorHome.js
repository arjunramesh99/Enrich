import React from 'react'

export default class EducatorHome extends React.Component {
    constructor(props) {
        super(props);
        let students_ref = this.props.curr_classroom.child('students');

        this.state = {
            students_ref,
            ts: 1,
            rgb: [255, 0, 0],
        };

        this.onValueChange = this.onValueChange.bind(this);
    }

    // callback function for when the learning states of any student changes
    onValueChange = snap => {
        let student_count = 0;
        let num_positive = 0;
        Object.values(snap.val()).forEach(student => {
            num_positive += student.ls;
            student_count++;
        });
        console.log("Student count: "+ student_count);
        console.log("Positive: "+ num_positive);
        let threshold = student_count/2;
        const grad = 255 / threshold;
        let red_num_thresh = 255
        let green_grad = (num_positive >= threshold ? 255: grad * num_positive);
        let red_grad = (num_positive <= threshold ? 255: 255 - grad * (num_positive - threshold));
        this.setState({
            rgb: [red_grad, green_grad, 0]
        })
    };

    componentDidMount() {
        this.state.students_ref.on('value', this.onValueChange);
    }

    componentWillUnmount() {
        this.state.students_ref.off();
    }

    render() {
        console.log(this.state.rgb);
        return (
            <button
                className={"learningStateButton"}
                style={{backgroundColor: "rgb("+this.state.rgb[0]+","+this.state.rgb[1]+", 0)"}}
            />
        )
    }
}
