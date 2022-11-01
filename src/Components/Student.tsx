import React, { Component } from "react";

interface StudentDetails {             // interface ku pathula inga type use pannekalam
    name: string,
    age: number,
    city?: string
}
 type StudentsProps ={
    fatherName:string
    motherName?:string;
 }
class Student extends Component<StudentsProps>{   //? is optional ku use pannuvom //component la rendu pass agum props and state
    // 
    state: Readonly<StudentDetails>={
        name:'Rahu',
        age:23
     

    }
    myClick = ()=>{
        this.setState({
            name:'ram'
        })
    }
    
    render(): JSX.Element {                //return jsx format use this one JSX.Element
        //return( <><h1>This is Quadient project</h1></>)
        const {name,age}=this.state;
        return <><h1>My name is {name},iam  {age} years old.</h1>
        <h2>{this.props.fatherName}</h2>
        <button type="button" onClick={this.myClick}>Please Click this button</button></>
    }
}
export default Student