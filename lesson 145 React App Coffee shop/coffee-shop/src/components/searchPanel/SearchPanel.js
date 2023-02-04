import { Component } from 'react';



class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateInputValue = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <>
                <label className='align-items-center d-inline-flex gap-2' >Lookiing for
                    <input
                        className='text-center'
                        type="text"
                        placeholder="start typing here..."
                        style={{
                            textIndent: '10px',
                            width: 'auto',
                            boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
                            borderRadius: '4px'
                        }}
                        value={this.state.term}
                        onChange={this.onUpdateInputValue} />
                </label>

            </>
        )
    }

}

export default SearchPanel;