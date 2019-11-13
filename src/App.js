import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='app row'>
                <div>
                    <input></input>
                    <button className='button'>go</button>
                </div>
                <div className='end'>
                    <button className='button'>toggle</button>
                </div>
            </div>
        );
    }
}