import React from 'react';
import FakeData from './data.json';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchData } = this.props;
        return (
            <div className='search-results'>
                    {/* {searchData.map((title, index) => (
                        <div className='li-title' key={title.mal_id}>
                        <img src={title.image_url}></img>
                        </div>
                    ))} */}
                    {FakeData.map((title, index) => (
                        <div className='li-title' key={title.mal_id}>
                            <img src={title.image_url}></img>
                        </div>
                    ))}
            </div>
        );
    }
}