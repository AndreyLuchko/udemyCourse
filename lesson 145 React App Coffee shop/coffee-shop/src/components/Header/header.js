import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from '../Navigation/navigation';



import './header.css'

function Header() {
    const mainBg = 'images/Main-bg.jpg',
          beansLogo = 'images/Beans-logo.svg';

    return (
        <Card className='bg-image text-white' style={{ 'min-height': 640, 'background': `#ffffff url(${mainBg}) no-repeat center`}}>
            
            <Navigation color='text-white' src='images/logo.svg' />

            <Card.Body className="d-flex align-items-center flex-column text-center">
                <Card.Title style={{ 'fontSize': '3em' }}>Everything You Love About Coffee</Card.Title>
                <Card.Img src={beansLogo} width="230" height="40" alt='Beans logo' />
                <Card.Text className='mt-4' style={{ 'fontSize': '1.7em' }} >
                    We makes every day full of energy and taste
                </Card.Text>
                <Card.Text style={{ 'fontSize': '1.7em' }}>Want to try our beans?</Card.Text>
                <Button variant="outline-light" className='px-5'>More</Button>
            </Card.Body>

        </Card>
    );
}

export default Header;