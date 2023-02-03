
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HeaderBody() {
    const beansLogo = 'images/Beans-logo.svg';

    return (
        <>
            <Card.Img src={beansLogo} width="230" height="40" alt='Beans logo' />
            <Card.Text className='mt-4' style={{ fontSize: '1.7em' }} >
                We makes every day full of energy and taste
            </Card.Text>
            <Card.Text style={{ fontSize: '1.7em' }}>Want to try our beans?</Card.Text>
            <Button variant="outline-light" className='px-5'>More</Button>
        </>
    );
}

export default HeaderBody;
