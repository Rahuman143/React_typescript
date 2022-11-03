import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

interface StudentDetails {             // interface ku pathula inga type use pannekalam
    name: string,
    age: number,
    city?: string
}
type StudentsProps = {
    fatherName: string
    motherName?: string;
}
class Student extends Component<StudentsProps>{   //? is optional ku use pannuvom //component la rendu pass agum props and state
    // 
    state: Readonly<StudentDetails> = {
        name: 'Rahu',
        age: 23


    }
    myClick = () => {
        this.setState({
            name: 'ram',
            age: 18
        })
    }

    render(): JSX.Element {                //return jsx format use this one JSX.Element
        //return( <><h1>This is Quadient project</h1></>)

        const { name, age } = this.state;
        return <>
            <h1 style={{ color: "blue"  }}>Student Component</h1>
            <h4>My name is {name},  I am  {age} years old.</h4>
            <h4>Father Name: {this.props.fatherName}</h4>
            <Button variant="danger" size="lg" type="button" onClick={this.myClick}>Click</Button></>
    }
}
export default Student