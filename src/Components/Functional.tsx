import { type } from "@testing-library/user-event/dist/type"
import React, { FC, useState } from "react"
import '../././App.css';
import Button from 'react-bootstrap/Button';
import { json, text } from "stream/consumers";

type functionalProps ={
    name: string,
    age?:number 
}

type functionArray ={
    id:number,
    item: String,
    quantitiy: number,
    price:number
    
}
const Functional: FC<functionalProps> = (props): JSX.Element => { // FC vanthu functional component la props define panreom
    const [sureName,setSureName] = useState<string>("Pathu")
    const [store,setStore] = useState<functionArray[]>([{id:1,item:"Pencil",quantitiy:10,price:5}])

    const myClick = () =>{
        setSureName('Kannama')
    }
    const storeClick = () =>{
        setStore([...store,{id:store.length+1,item:"Pencil",quantitiy:10,price:5}])
    }
    return (
        
        <>
            <h1 style={{color:"GrayText"}}>Functional Component</h1>
            <h4>Enter your name: {props.name}  {sureName}</h4>
            <Button variant="primary" size="lg" type="button" onClick={myClick}>Click</Button>
            <br></br>
            <h1>{JSON.stringify(store)}</h1>
            <Button variant="dark" size="lg" type="button" onClick={storeClick}>Click</Button>
            <h1>{store.map(e => <h5 key={e.id}>{e.item}</h5>)}</h1>
            <Button variant="outline-danger" size="lg" type="button" onClick={storeClick}>Click</Button>
        </>
    )
}

export default Functional