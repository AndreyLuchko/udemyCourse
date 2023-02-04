import { Col, Row } from 'react-bootstrap';
import SearchPanel from '../searchPanel/SearchPanel';
import CoffeeFilter from '../coffeeFilter/CoffeeFilter';


function SearchBlock({onUpdateSearch}) {
    return (
        <Row className="justify-content-center align-items-center">
            <Col sm={12} md={5} className='text-center'  >
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
            </Col>
            <Col sm={12} md={5} className='text-center'  >
                <CoffeeFilter />
            </Col>
        </Row>
    )
}

export default SearchBlock;