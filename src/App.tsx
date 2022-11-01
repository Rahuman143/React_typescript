import React from "react";
import Student from "./Components/Student";
import Register from "./Components/Register";

class App extends React.Component{
  testClick = ()=>{
    alert('Thank you for clicking')
  }
  render(){
    return(
    <>
      <p>I am rahuman this is typescript project</p>
    <Student fatherName={"Krishna"} />,
    <Register studentName ={"Rahuman"} studentAge={20} testClick={this.testClick} />
    </>
  )}
}
export default App;