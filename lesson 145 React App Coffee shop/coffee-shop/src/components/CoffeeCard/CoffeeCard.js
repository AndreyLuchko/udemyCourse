import { Col, Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';


const CoffeeCard = (props) => {
    const { img, title, name, price, height } = props;
    return (
        <Col sm={6} md={4} lg={4}  >
            <Card className='rounded bg-transparent' style={{ height: `${height}px` }}>
                <Container className='rounded p-3 shadow-lg' style={{ width: '220px', background: 'rgba(255, 255, 255, 0.65)'}}>
                    <Card.Img
                        className='mx-auto d-block'
                        style={{ width: '150px'}}
                        variant="top"
                        src={img}
                        height="130" />
                    <Card.Body className='mt-2 p-0 text-end'>
                        <Card.Text>{title}</Card.Text>
                        <Card.Text>{name}</Card.Text>
                        <Card.Text>
                            {price + '$'}
                        </Card.Text>
                    </Card.Body>
                </Container>
            </Card>
        </Col>
    );
}

export default CoffeeCard;