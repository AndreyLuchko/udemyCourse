import { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navigation from '../../navigation/Navigation';
import Header from '../../header/Header';
import AboutBeans from '../../aboutBeans/AboutBeans';
import CoffeeList from '../../coffeeList/coffeeList';
import SearchBlock from '../../searchBlock/SearchBlock';

import './coffee.css'

class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { img: 'images/Presto.png', title: 'Presto Coffee Beans 1 kg', name: 'Brazil', price: 15.99, height: 260, id: 1 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99, height: 260, id: 2 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 6.99, height: 260, id: 3 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 4 },
                { img: 'images/Solimo.png', title: 'Solimo Coffee Beans 2 kg', name: 'Brazil', price: 10.73, height: 260, id: 5 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 6 }
            ],
            term: ''
        }
    }

    searchCof = (arr, term) => {
       if(term.length === 0) {
        return arr;
       }  

       return arr.filter(item => {
        return item.title.indexOf(term) > -1
       })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    render() {
        const { data, term } = this.state;
        const visibleData = this.searchCof(data, term);

        return (
            <>
                <Header
                    minHeight='260'
                    title='Our Coffee'
                    mainBg='images/Coffee-bg.jpg'
                />
                <main>
                    <AboutBeans />
                    <hr style={{ width: 240, margin: '40px auto', borderTop: '2px solid #000000' }} />
                    <section className="search-block mt-4 mx-auto" style={{ maxWidth: '850px' }} >
                        <SearchBlock onUpdateSearch={this.onUpdateSearch}/>
                    </section>
                    <CoffeeList
                        data={visibleData} />
                </main>
                <footer>
                    <Navigation color='text-reset' src='images/logo-black.svg' />
                    <Image
                        className='d-block mx-auto mt-2 mb-3'
                        src="images/Beans-logo-black.svg"
                        alt="Beans logo"
                        width="230"
                        height="40" />
                </footer>
            </>


        );
    }
}

export default Coffee;
