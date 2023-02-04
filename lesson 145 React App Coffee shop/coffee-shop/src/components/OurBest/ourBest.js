import { Row } from 'react-bootstrap';

import Container from 'react-bootstrap/esm/Container';
import CoffeeCard from '../coffeeCard/CoffeeCard';

const OurBest = ({data}) => {

    const ourBestBg = 'images/ourBestBg.jpg'
    const elements = data.map(item => {
       const {id, ...itemProps} = item;
       return (
        <CoffeeCard
            key={id}
            {...itemProps}/>
       ) 
    })

    return (
        <div className="ourBest" style={{background: `#ffffff url(${ourBestBg}) no-repeat center`, backgroundSize: 'cover' }}>
            <h3 className='text-center' style={{ paddingTop: '80px' }}>Our best</h3>
            <Container  style={{ paddingBottom: '80px', maxWidth: '850px' }}>
                <Row className="justify-content-center align-items-center mt-4" >
                    {elements}
                </Row>
            </Container>
        </div>
    )    
}
    
export default OurBest;