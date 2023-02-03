import { Card } from "react-bootstrap"

function TitleLogo({ title }) {
    return (
        <>
            <Card.Title className='mb-3 fs-3 text-center'>{title}</Card.Title>
            <Card.Img
                src='images/Beans-logo-black.svg'
                width="230"
                height="40"
                alt='Beans logo' />
        </>

    )
}

export default TitleLogo;