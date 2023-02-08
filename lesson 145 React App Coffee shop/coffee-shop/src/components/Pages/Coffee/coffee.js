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
        this.text1 = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
        this.text2 = 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.'
        this.state = {
            data: [
                { img: 'images/Presto.png', title: 'Presto Coffee Beans 1 kg', name: 'Brazil', price: 15.99, height: 260, id: 1 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Kenya', price: 6.99, height: 260, id: 2 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Columbia', price: 6.99, height: 260, id: 3 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 4 },
                { img: 'images/Solimo.png', title: 'Solimo Coffee Beans 2 kg', name: 'Brazil', price: 10.73, height: 260, id: 5 },
                { img: 'images/Aromistico.png', title: 'AROMISTICO Coffee 1 kg', name: 'Brazil', price: 6.99, height: 260, id: 6 }
            ],
            term: '',
            sortArr: []
        }
    }

    filterCof = (arr, sortArr) => {
        let res = [];
        if (sortArr.length === 0) {
            return arr;
        }
        sortArr.forEach(name => {
            res.push(...arr.filter(item => item.name === name))
        })
        return res;
    }

    onUpdateFilter = (sortArr) => {
        this.setState({ sortArr: sortArr })
    }

    searchCof = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        return arr.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term })
    }

    render() {
        const { data, term, sortArr } = this.state,
            visibleData = this.searchCof(this.filterCof(data, sortArr), term);

        return (
            <>
                <Header
                    minHeight='260'
                    title='Our Coffee'
                    mainBg='images/Coffee-bg.jpg' />
                <main>
                    <AboutBeans
                        src='images/Girl-coffee.png'
                        alt='Girl with coffee cup'
                        titleLogo='About our beans'
                        text1={this.text1}
                        text2={this.text2}
                        className='text-center' />
                    <hr style={{ width: 240, margin: '40px auto', borderTop: '2px solid #000000' }} />
                    <section className="search-block mt-4 mx-auto" style={{ maxWidth: '850px' }} >
                        <SearchBlock
                            onUpdateSearch={this.onUpdateSearch}
                            onUpdateFilter={this.onUpdateFilter}
                            sortArr={sortArr} />
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
