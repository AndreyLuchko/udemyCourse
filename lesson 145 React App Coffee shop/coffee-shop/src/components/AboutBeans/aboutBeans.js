import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleLogo from '../Title-logo/title-logo';
import { Card } from 'react-bootstrap';

function AboutBeans() {
    return (
        <Container className='mt-4'>
            <Row className="justify-content-center align-items-center">
                <Col lg={4} className='text-center'>
                    <img src="images/Girl-coffee.png" alt="Girl with coffee cup" />
                </Col>
                <Col lg={4}>
                    <TitleLogo title='About our beans'/>
                    <Card>
                        <Card.Body className='text-center'>
                            <Card.Text>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</Card.Text>
                            <Card.Text>Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutBeans;