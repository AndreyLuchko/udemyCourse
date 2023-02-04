import Card from 'react-bootstrap/Card';

import Navigation from '../navigation/Navigation';


import './header.css'

function Header(props) {
    
    const {minHeight, title, component, mainBg} = props;

    return (
        <Card 
            className='header bg-image text-white' 
            style={{ minHeight: `${minHeight}px`, background: `#ffffff url(${mainBg}) no-repeat center`}}>
            
            <Navigation color='text-white' src='images/logo.svg' />

            <Card.Body className="d-flex align-items-center flex-column text-center">
                <Card.Title style={{ fontSize: '3em' }}>{title}</Card.Title>
                {component}
            </Card.Body>

        </Card>
    );
}

export default Header;