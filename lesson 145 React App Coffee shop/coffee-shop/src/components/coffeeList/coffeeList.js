import { Container, Row } from "react-bootstrap";

import CoffeeCard from "../coffeeCard/CoffeeCard";


function CoffeeList ({data}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
         <CoffeeCard
             key={id}
             {...itemProps}/>
        ) 
     })

    return (
        <Container className="container p-5" style={{ maxWidth: '850px'}}>
            <Row lg={3} className="g-5">
                {elements}
            </Row>
        </Container>
    )
}

export default CoffeeList;