import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleLogo from '../titleLogo/TitleLogo';
import { Card } from 'react-bootstrap';

function AboutBeans({src, alt, titleLogo, className, text1, text2, text3}) {
    return (
        <Container className='mt-4'>
            <Row className="justify-content-center align-items-center">
                <Col xxl={4} xl={5} lg={6}  className='text-center'>
                    <img src={src} alt={alt} />
                </Col> 
                <Col  xxl={4} xl={5} lg={6} >
                    <TitleLogo title={titleLogo}/>
                    <Card>
                        <Card.Body className={className}>
                            <Card.Text>{text1}</Card.Text>
                            <Card.Text>{text2}</Card.Text>
                            <Card.Text>{text3}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutBeans;