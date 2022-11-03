import { Component, ReactNode } from "react";
import Button from 'react-bootstrap/Button';

type stateMethodState = {
    animalsName: string;
}

// type stateMethodProps = {
//     animalsType: string;
// }
class StateMethod extends Component<stateMethodState>{
    myChange = (e: any): void => {
        this.setState({
            animalsName: e.target.value
        })

    }

    state: Readonly<stateMethodState> =
        {
            animalsName: '',
        }
    myClick = (): void => {
        alert(this.state.animalsName)

    }
    render(): JSX.Element {
        return (
            <>
                <h1 style={{ color: "purple" }}>StateMethod</h1>
                <input type="text" onChange={this.myChange} />
                <Button variant="info" size="lg" type="button" onClick={this.myClick}>Submit</Button>
            </>
        );
    }
}
export default StateMethod