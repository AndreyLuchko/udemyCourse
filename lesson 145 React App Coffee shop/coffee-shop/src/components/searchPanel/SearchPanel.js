import { Component } from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            termlocal: ''
        }
    }

    onUpdateInputValue = (e) => {
        const newterm = e.target.value;
        this.setState({termlocal: newterm});
        this.props.onUpdateSearch(newterm)
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
                        value={this.state.termlocal}
                        onChange={this.onUpdateInputValue} />
                </label>

            </>
        )
    }

}

export default SearchPanel;