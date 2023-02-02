import Card from 'react-bootstrap/Card';

function About() {
    return (

         <Card className='align-items-center' style={{ 'min-height': 520 }}>
            <Card.Body className='text-center' style={{ 'max-width': 600 }}>
                <Card.Title className='mb-3 fs-3'>About Us</Card.Title>
                <Card.Img src='images/Beans-logo-black.svg' width="230" height="40" alt='Beans logo' />
                <Card.Text className='mt-3 lh-base'>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </Card.Text>
                <Card.Text className='mt-3 lh-base'>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;