import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        // TODO: make sure we call callback from parent component
        onSubmit(term);
    };
    
  
    return (
        <div className="ui segment search-bar" style={{marginTop: '10px'}}>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={(event) => setTerm(event.target.value)} 
                    />
                </div>
            </form>
        </div>
    );

}

export default SearchBar;