import { Component, ReactNode } from "react";


type parentsProps = {
    parentName: string;
    parentAge: number;
}

class Parents extends Component<parentsProps>{

    render() {
        return (
            <>
                <h1 style={{ color: "red" }}>Parant Component</h1>
                <h4>parent Name: {this.props.parentName} </h4>
                <h4>parent Age: {this.props.parentAge} </h4>
            </>
        )
    }
}
export default Parents