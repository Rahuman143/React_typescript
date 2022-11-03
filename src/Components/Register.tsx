import { Component, ReactNode } from "react";
import Button from 'react-bootstrap/Button';


type RegisterProps = {
    studentName: string
    studentAge: number;
    testClick: () => void
}
class Register extends Component<RegisterProps>{

    render(): JSX.Element {
        return (
            <>
                <h1 style={{ color: "cyan" }}>Register Component</h1>
                <h4>Student Name : {this.props.studentName}</h4>
                <Button variant="success" size="lg" type="button" onClick={this.props.testClick}>Click Me</Button>
            </>
        );
    }
}
export default Register