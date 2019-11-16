
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Saved from './Saved';
import FakeData from './data.json';
import SearchResults from './SearchResults';


export default function App() {

    const getSearch = () => {
        axios.get(`https://api.jikan.moe/v3/search/anime?q=%${searchInput}&page=1`)
            .then(res => setSearchData( res.data.results ))
            .catch(err => console.log('Error triggered in App.js at getSearch().' + err));
    };

    const [searchInput, setSearchInput] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [toggleSaved, setToggleSaved] = useState(false);
    
    
    var toggleDisplay = {};
    if (toggleSaved) {
        toggleDisplay.display = 'none';
    }
    
    const toggle = () => {
        toggleSaved ? setToggleSaved(false) : setToggleSaved(true);
    };
    /**
     * Behold below ⬇ an incredible console.log contraption to check the value after the async setState.
     * I will find a better way to do this later.
     */
    const consoleThat = () => {
        
        setTimeout(function(){ console.log(searchData); }, 1000 );

    };

    useEffect(consoleThat, [searchData]);

    return (
        <div className='app'>
            <div className='header'>
                <h1>Lorem Ipsum</h1>
            </div>
            <div className='search row'>
                <div>
                    <input type='text' name='searchInput' value={searchInput} onChange={ e => setSearchInput(e.target.value) } ></input>
                    <button className='button' onClick={
                        getSearch
                    }>go</button>
                </div>
                <div className='end'>
                    <button 
                        className='button' 
                        onClick={toggle}
                    >
                        toggle 
                    </button>
                </div>
            </div>
            <div className='saved-div' style={toggleDisplay}>
                <ul>
                    {FakeData.slice(0, 5).map((title, index) => (
                        <li className='saved-title' key={title.mal_id}>{title.title}</li>
                    ))}    
                </ul>
                
            </div>
            <SearchResults searchData={searchData}/>
        </div>
    );
}
