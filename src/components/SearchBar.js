import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        // TODO: make sure we call callback from parent component
        this.props.onSubmit(this.state.term);
    };
    
    render() {
        return (
            <div className="ui segment search-bar" style={{marginTop: '10px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;