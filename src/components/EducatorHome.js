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
    }

    componentDidMount() {
        this.state.students_ref.on('value', snap => {
            let student_count = 0;
            let num_positive = 0;
            Object.values(snap.val()).forEach(student => {
                num_positive += student.ls;
                student_count++;
            });
            const grad = 255 / student_count;
            this.setState({
                rgb: [255 - grad * num_positive, grad * num_positive, 0]
            })
        });
    }

    render() {
        console.log(this.state.rgb);
        return (
            <div>this is a div</div>
        )
    }
}
