import React from 'react';
import Saved from './Saved';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSaved: false,
        };
    }

    getSearch() {
        axios.get('https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1')
            .then(res => console.log(res.data.results))
            .catch(err => console.log(err));

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
                        <input></input>
                        <button className='button' onClick={this.getSearch}>go</button>
                    </div>
                    <div className='end'>
                        <button 
                            className='button' 
                            onClick={() => {
                                this.state.toggleSaved ? 
                                this.setState({toggleSaved: false}) : 
                                this.setState({toggleSaved: true}) } }
                        >
                            toggle
                        </button>
                    </div>
                </div>
                <div className='saved' style={toggleDisplay}>
                    <p>Hello</p>
                </div>
            </div>
        );
    }
}