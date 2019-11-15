import React from 'react';
import axios from 'axios';
import Saved from './Saved';
import FakeData from './data.json';
import SearchResults from './SearchResults';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSaved: false,
            searchInput: '',
            searchData: [],
        };
        this.getSearch = this.getSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /** This is a JSDoc comment:
     * ⬇ This is a tag explaining the type of foo  @<type>
     *  @method
     *  @param {string} event - the input text
    */
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    getSearch() {
        axios.get(`https://api.jikan.moe/v3/search/anime?q=%${this.state.searchInput}&page=1`)
            .then(res => this.setState({ searchData: res.data.results}, () => console.log(this.state.searchData)))
            .catch(err => console.log('Error triggered in App.js at getSearch().' + err));

    }


    render(){
        var toggleDisplay = {};
        if (this.state.toggleSaved) {
            toggleDisplay.display = 'none';
        }
        return (
            <div className='app'>
                <div className='header'>
                    <h1>Lorem Ipsum</h1>
                </div>
                <div className='search row'>
                    <div>
                        <input type='text' name='searchInput' value={this.state.searchInput} onChange={this.handleChange} ></input>
                        <button className='button' onClick={this.getSearch}>go</button>
                    </div>
                    <div className='end'>
                        <button 
                            className='button' 
                            onClick={() => {
                                this.state.toggleSaved ? 
                                this.setState({toggleSaved: false}) : 
                                this.setState({toggleSaved: true}) 
                            }}
                        >
                            toggle
                        </button>
                    </div>
                </div>
                <div className='saved-div' style={toggleDisplay}>
                    
                    {FakeData.slice(0, 5).map((title, index) => (
                        <div className='saved-title' key={title.mal_id}>
                            <img src={title.image_url}></img>
                        </div>
                    ))}
                    <p>Hello</p>
                </div>
                <SearchResults searchData={this.state.searchData}/>
            </div>
        );
    }
}