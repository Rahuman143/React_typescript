import { Component, ReactNode } from "react";


type RegisterProps ={
    studentName:string
    studentAge:number;
    testClick:()=>void
 }
class Register extends Component<RegisterProps>{

    render():JSX.Element{
        return(
        <>
        <h1>{this.props.studentName}</h1>
        <button type="button" onClick={this.props.testClick}>Click Me</button>
        </>
        );
    }
}
 export default Register