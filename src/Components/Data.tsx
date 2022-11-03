import React, { useEffect, useState ,FC} from "react"
import Button from 'react-bootstrap/Button';

type detailsData = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Data:FC<{}> = (props): JSX.Element => { // FC vanthu functional component la props define panreom
    const [details, setDetails] = useState<detailsData>();
    const [id,setId] = useState<number | string >(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then((json: detailsData) => setDetails(json))
    }, [])
    
     const dataChange = (e:any) => {
        setId(e.target.value)

     }
     const dataClick = ():void =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then((json: detailsData) => setDetails(json))
     }
    return (

        <>
            <h1>Json placeholder</h1>   
            <input type="text" onChange={dataChange} />
            <Button variant="outline-danger" size="lg" type="button" onClick={dataClick}>Click</Button>
            <h4>{JSON.stringify(details)}</h4>
        </>
    )
}
export default Data