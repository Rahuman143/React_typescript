import React from "react";
import Data from "./Components/Data";
import Functional from "./Components/Functional";
import Parents from "./Components/Parents";
import Register from "./Components/Register";
import StateMethod from "./Components/StateMethod";
import Student from "./Components/Student";


type parentsState = {
  parentName: string;
  parentAge: number;
}
type ParantsReport = {
  parantReport: parentsState[]
}
class App extends React.Component {

  testClick = () => {
    alert('Thank you for clicking')
  }
  state: Readonly<ParantsReport> =
    {
      parantReport: [{ parentName: 'Raman', parentAge: 40 }]
    }
  render() {
    return (
      <>
      
       
        {/* <h1 style={{ color: "pink" }}>I am rahuman this is typescript React project</h1> */}
        <Student fatherName={"Krishna"} />,

        <Register studentName={"Rahuman"} studentAge={20} testClick={this.testClick} />,

        <Parents parentName={this.state.parantReport[0].parentName} parentAge={45} />,

        <StateMethod animalsName="" />
        
        <Functional name={"Bharathi"} />
        
        <Data />
              </>
    )
  }
}
export default App;