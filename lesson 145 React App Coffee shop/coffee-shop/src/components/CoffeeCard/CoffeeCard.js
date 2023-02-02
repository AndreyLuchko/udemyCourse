import { Col, Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';


const CoffeeCard = (props) => {
    const { img, title, name, price } = props;
    return (
        <Col md="auto" style={{ width: 'auto'}}>
            <Card className='rounded' style={{ width: '220px', height: '240px', background: 'rgba(255, 255, 255, 0.65)' }}>
                <Container className='p-3'>
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